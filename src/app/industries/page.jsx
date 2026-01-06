import { redirect } from "next/navigation";

export const revalidate = 604800;

export default function IndustriesRoot() {
  redirect("/industries/banking-finance");
}
