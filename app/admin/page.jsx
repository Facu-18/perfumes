import AdminPanel from "./panel";
import perfumes from "../../data/perfumes.json";

export const metadata = {
  title: "Admin de precios"
};

export default function AdminPage() {
  return <AdminPanel initialPerfumes={perfumes} />;
}
