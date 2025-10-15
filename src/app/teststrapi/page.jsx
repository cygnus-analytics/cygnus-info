import { getGlobal, getIndustriesPage } from "@/data/loaders";

export default async function TestPage() {
  const globalRes = await getGlobal();
  const industriesRes = await getIndustriesPage();

  const globalData = globalRes?.data || {};
  const industries = industriesRes?.data || [];

  return (
    <div className="p-8">
      {/* Global Data */}
      <h1 className="text-3xl font-bold mb-4">{globalData.title}</h1>
      <p className="text-gray-600 mb-8">{globalData.description}</p>

      <h2 className="text-2xl font-semibold mb-6">Industries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="border rounded-2xl shadow-sm p-4 hover:shadow-md transition duration-300"
          >
            {industry.banner?.[0]?.url && (
              <img
                src={`https://localhost:1337/api/${industry.banner[0].url}`}
                alt={industry.heading}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}

            <h3 className="text-xl font-semibold">{industry.heading}</h3>
            <p className="text-gray-600 mt-2">{industry.description}</p>

            <div className="mt-4">
              {industry.IndustryCard?.map((card) => (
                <div key={card.id} className="mt-3">
                  <h4 className="font-semibold">{card.title}</h4>
                  <p className="text-sm text-gray-500">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
