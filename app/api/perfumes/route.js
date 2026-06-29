import { revalidatePath } from "next/cache";
import { getGithubConfig, readPerfumes, writePerfumes } from "../../../lib/perfumes";

const validatePerfumes = (items) => {
  if (!Array.isArray(items)) return false;

  return items.every(
    (item) =>
      Number.isInteger(item.id) &&
      typeof item.name === "string" &&
      typeof item.line === "string" &&
      typeof item.variant === "string" &&
      Number.isFinite(item.price) &&
      item.price >= 0 &&
      typeof item.image === "string"
  );
};

const errorResponse = (error, status = 500) => {
  const message = error instanceof Error ? error.message : "Error inesperado.";
  return Response.json({ error: message }, { status });
};

const saveToGithub = async (items) => {
  const { token, repository, branch } = getGithubConfig();

  if (!token || !repository) return false;

  const apiUrl = `https://api.github.com/repos/${repository}/contents/data/perfumes.json`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  };

  const currentResponse = await fetch(`${apiUrl}?ref=${branch}`, { headers, cache: "no-store" });

  if (!currentResponse.ok) {
    const detail = await currentResponse.text();
    throw new Error(`No pude leer el JSON actual desde GitHub. ${detail}`);
  }

  const currentFile = await currentResponse.json();
  const content = Buffer.from(`${JSON.stringify(items, null, 2)}\n`).toString("base64");
  const updateResponse = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Update perfume prices",
      content,
      sha: currentFile.sha,
      branch
    })
  });

  if (!updateResponse.ok) {
    const detail = await updateResponse.text();
    throw new Error(`No pude guardar el JSON en GitHub. ${detail}`);
  }

  return true;
};

export async function GET() {
  try {
    const perfumes = await readPerfumes();

    return Response.json({ perfumes });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PUT(request) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (adminPassword && request.headers.get("x-admin-password") !== adminPassword) {
      return Response.json({ error: "Clave admin incorrecta." }, { status: 401 });
    }

    const body = await request.json().catch(() => null);
    const nextPerfumes = body?.perfumes;

    if (!validatePerfumes(nextPerfumes)) {
      return Response.json({ error: "El listado de perfumes no es valido." }, { status: 400 });
    }

    const savedToGithub = await saveToGithub(nextPerfumes);

    if (!savedToGithub) {
      if (process.env.VERCEL === "1") {
        return Response.json(
          { error: "En Vercel falta configurar GITHUB_TOKEN para guardar cambios persistentes en data/perfumes.json." },
          { status: 500 }
        );
      }

      await writePerfumes(nextPerfumes);
    }

    revalidatePath("/");
    revalidatePath("/admin");

    return Response.json({ ok: true, mode: savedToGithub ? "github" : "local" });
  } catch (error) {
    return errorResponse(error);
  }
}
