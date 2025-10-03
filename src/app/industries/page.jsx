import { redirect } from "next/navigation";

export const metadata = {
  title: "Cygnus | Industries",
}

export default function IndustriesRoot() {
  redirect("/industries/banking-finance");
}
