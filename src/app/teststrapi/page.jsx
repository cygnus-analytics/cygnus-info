import { getHomePage } from "@/data/loaders";
import { getGlobal } from "@/data/loaders";

export default async function TestPage() {

  const response = await getGlobal();
  const data = response?.data || {};
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-gray-600">{data.description}</p>
    </div>
  );
}
