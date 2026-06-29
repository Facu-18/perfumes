import { promises as fs } from "fs";
import path from "path";

export const perfumesPath = path.join(process.cwd(), "data", "perfumes.json");

export const getGithubConfig = () => {
  const owner = process.env.VERCEL_GIT_REPO_OWNER;
  const repo = process.env.VERCEL_GIT_REPO_SLUG;

  return {
    token: process.env.GITHUB_TOKEN,
    repository: process.env.GITHUB_REPOSITORY || (owner && repo ? `${owner}/${repo}` : undefined),
    branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "master"
  };
};

export const shouldUseGithubData = () => {
  const { token, repository } = getGithubConfig();
  return process.env.VERCEL === "1" && Boolean(token && repository);
};

export const readPerfumesFromGithub = async () => {
  const { token, repository, branch } = getGithubConfig();
  const apiUrl = `https://api.github.com/repos/${repository}/contents/data/perfumes.json?ref=${branch}`;
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    },
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("No pude leer el JSON actual desde GitHub.");
  }

  const file = await response.json();
  return JSON.parse(Buffer.from(file.content, "base64").toString("utf8"));
};

export const readPerfumes = async () => {
  if (shouldUseGithubData()) {
    return readPerfumesFromGithub();
  }

  const file = await fs.readFile(perfumesPath, "utf8");
  return JSON.parse(file);
};

export const writePerfumes = async (perfumes) => {
  await fs.writeFile(perfumesPath, `${JSON.stringify(perfumes, null, 2)}\n`);
};
