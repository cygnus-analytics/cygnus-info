"use client";

import React from "react";
import LogoLoop from "./LogoLoop";

const logoBannerImages = [
  { src: "/svgLogo/xerox.svg", alt: "Xerox" },
  { src: "/svgLogo/aws.svg", alt: "AWS" },
  { src: "/svgLogo/nvidia.svg", alt: "NVIDIA"},
  { src: "/svgLogo/cisco.svg", alt: "Cisco" },
  { src: "/svgLogo/hpe.svg", alt: "Hewlett Packard Enterprise"},
  { src: "/svgLogo/ibm.svg", alt: "IBM" },
  { src: "/svgLogo/microsoft1.svg", alt: "Microsoft" },
  { src: "/svgLogo/netapp.svg", alt: "NetApp" },
  { src: "/svgLogo/redhat.svg", alt: "Red Hat" },
  { src: "/svgLogo/arcon.svg", alt: "Arcon" },
];

const Companies = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center py-16 md:py-28">
      {/* Text Section */}
      <div className="w-full md:w-2/6 px-6 md:px-10 mb-8 md:mb-0 text-center md:text-start">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          In Partnership With Leading Pioneers
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Collaborating with industry leaders, we guarantee top-tier IT solutions
          to meet your business requirements.
        </p>
      </div>

      <div className="w-full md:w-4/6 h-64 md:h-72 lg:h-[18rem] rounded-l-2xl relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center overflow-hidden">
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
