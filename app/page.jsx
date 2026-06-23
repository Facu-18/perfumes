import Catalog from "./catalog";
import perfumes from "../data/perfumes.json";

export default function HomePage() {
  return <Catalog initialPerfumes={perfumes} />;
}
