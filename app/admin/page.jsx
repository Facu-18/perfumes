import AdminPanel from "./panel";
import { readPerfumes } from "../../lib/perfumes";

export const metadata = {
  title: "Admin de precios"
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const perfumes = await readPerfumes();

  return <AdminPanel initialPerfumes={perfumes} />;
}
