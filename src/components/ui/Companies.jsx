"use client";
import React from "react";
import LogoLoop from "./LogoLoop";

const Companies = ({ data }) => {
  if (!data) return null;

  const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  const logoBannerImages = data.logos.map((logo) => {
    const isFullUrl = logo.url?.startsWith('http://') || logo.url?.startsWith('https://');
    
    return {
      src: isFullUrl ? logo.url : `${baseURL}${logo.url}`,
      alt: logo.alternativeText || logo.name || "Company logo",
    };
  });

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center py-16 md:py-28">
      <div className="w-full md:w-2/6 px-6 md:px-10 mb-8 md:mb-0 text-center md:text-start">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-600">
          {data.description}
        </p>
      </div>

      <div className="w-full md:w-4/6 h-64 md:h-72 lg:h-[18rem] rounded-none sm:rounded-none md:rounded-none lg:rounded-l-2xl relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center overflow-hidden">
        <div className="absolute w-full text-white">
          <LogoLoop
            logos={logoBannerImages}
            speed={150}
            direction="right"
            logoHeight={60}
            gap={70}
            pauseOnHover
            scaleOnHover
            ariaLabel="Partner company logos"
            className="filter brightness-0 invert transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;