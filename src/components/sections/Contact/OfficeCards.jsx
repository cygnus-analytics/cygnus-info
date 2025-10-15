"use client";
import { motion } from "framer-motion";
import StrapiImage from "../../ui/StrapiImage";

export default function Offices({ locationsData }) {
  const locations = locationsData?.Card || [];

  const Card = ({ location }) => {
    return (
      <div className="w-full h-72 perspective">
        <div className="relative w-full h-full rounded-2xl shadow-lg transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180 cursor-pointer">
          <div className="absolute w-full h-full rounded-xl overflow-hidden backface-hidden">
            <StrapiImage
              src={location.image}
              alt={`${location.title}`}
              className="object-cover transition-transform duration-300 hover:scale-105"
              fill
            />
            <div className="absolute inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center p-4">
              <h3 className="text-white text-4xl font-bold">{location.title}</h3>
            </div>
          </div>

          <div
            className="
              absolute w-full h-full rounded-2xl
              bg-gradient-to-br from-neutral-100 to-neutral-100
              flex items-center justify-center p-6 text-center
              text-blue-900 font-semibold
              text-base sm:text-lg md:text-xl
              whitespace-pre-line backface-hidden rotate-y-180
            "
          >
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
          {locations.map((location) => (
            <Card key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}
