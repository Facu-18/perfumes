import { promises as fs } from "fs";
import path from "path";

export const perfumesPath = path.join(process.cwd(), "data", "perfumes.json");

export const readPerfumes = async () => {
  const file = await fs.readFile(perfumesPath, "utf8");
  return JSON.parse(file);
};

export const writePerfumes = async (perfumes) => {
  await fs.writeFile(perfumesPath, `${JSON.stringify(perfumes, null, 2)}\n`);
};
