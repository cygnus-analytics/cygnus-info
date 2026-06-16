"use client";

import Image from "next/image";

import c1 from "../../../../public/contactImgs/gateway-of-india-mumbai-2024-10-18-04-00-10-utc.jpg";
import c2 from "../../../../public/contactImgs/inaugurated-inspection-commissioner-wednesday-inauguration-intimated-arrangements_4e89d13c-ab54-11e6-b4b4-3ed39deda4e7.jpg.jpg";
import c3 from "../../../../public/contactImgs/one-day-dehradun-local-sightseeing-tour-package-private-cab-header.jpg";
import c4 from "../../../../public/contactImgs/pune-4058851__480.jpg";

/**
 * ✅ Static fallback (used if backend fails)
 */
const STATIC_LOCATIONS = [
  {
    id: "mumbai",
    title: "Mumbai",
    description: `
1005, Lodha Supremus,
Opp MTNL Building,
Saki Vihar Road,
Andheri (E), Mumbai – 400072`,
    image: c1,
  },
  {
    id: "pune",
    title: "Pune",
    description: `102,104, 1st Floor,
Dorabjiee Classic,
Survey Number:14A/3/1,
Lane No 5,
Near Turtulia Restaurant,
Koregaon Park, Pune – 411001`,
    image: c4,
  },
  {
    id: "delhi",
    title: "New Delhi",
    description: `55, 2nd  Floor, Lane-2, Westend Marg, Saidulajab,  
Near Saket Metro Station, New Delhi 110030`,
    image: c2,
  },
  {
    id: "dehradun",
    title: "Dehradun",
    description: `85/1, Laxmi Road, Dalanwala,
Dehradun – 248001`,
    image: c3,
  },
];

export default function Offices({ locationsData }) {
  /**
   * ✅ Normalize backend data to match UI structure
   */
  const backendLocations =
    locationsData?.Card?.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image?.url, // assuming Strapi URL
    })) || [];

  /**
   * ✅ Final data source (fallback-safe)
   */
  const locations =
    backendLocations.length > 0 ? backendLocations : STATIC_LOCATIONS;

  const Card = ({ location, index }) => {
    const isAboveFold = index < 2; // only first 2 images priority

    return (
      <div className="w-full h-72 perspective">
        <div className="relative w-full h-full rounded-2xl shadow-lg transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180 cursor-pointer">
          
          {/* Front */}
          <div className="absolute w-full h-full rounded-xl overflow-hidden backface-hidden">
            <Image
              src={location.image}
              alt={location.title || "Office"}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={isAboveFold} // ✅ LCP optimization
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <h3 className="text-white text-4xl font-bold">
                {location.title}
              </h3>
            </div>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full rounded-2xl bg-neutral-50 flex items-center justify-center p-6 text-center text-blue-900 font-semibold text-base sm:text-lg md:text-xl whitespace-pre-line backface-hidden rotate-y-180">
            {location.description}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-auto py-14 sm:py-20 bg-gray-50 font-sans antialiased">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <Card key={location.id || index} location={location} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}