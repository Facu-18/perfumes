import { revalidatePath } from "next/cache";
import { readPerfumes, writePerfumes } from "../../../lib/perfumes";

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

const saveToGithub = async (items) => {
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;
  const branch = process.env.GITHUB_BRANCH || "master";

  if (!token || !repository) return false;

  const apiUrl = `https://api.github.com/repos/${repository}/contents/data/perfumes.json`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  };

  const currentResponse = await fetch(`${apiUrl}?ref=${branch}`, { headers, cache: "no-store" });

  if (!currentResponse.ok) {
    throw new Error("No pude leer el JSON actual desde GitHub.");
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
    throw new Error("No pude guardar el JSON en GitHub.");
  }

  return true;
};

export async function GET() {
  const perfumes = await readPerfumes();

  return Response.json({ perfumes });
}

export async function PUT(request) {
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
    await writePerfumes(nextPerfumes);
  }

  revalidatePath("/");
  revalidatePath("/admin");

  return Response.json({ ok: true, mode: savedToGithub ? "github" : "local" });
}
