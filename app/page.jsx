import Catalog from "./catalog";
import { readPerfumes } from "../lib/perfumes";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const perfumes = await readPerfumes();

  return <Catalog initialPerfumes={perfumes} />;
}
