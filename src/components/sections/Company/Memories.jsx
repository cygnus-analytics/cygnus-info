"use client";

import React from "react";
import StrapiImage from "@/components/ui/StrapiImage";

const LifeAtCygnus = ({ data }) => {
  if (!data) return null;

  const { title, description, image } = data;

  return (
    <section className="py-20">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-4">{title}</h2>

      {/* Description */}
      {description && (
        <p className="text-center text-gray-600 mb-10 whitespace-pre-line">
          {description}
        </p>
      )}

      {/* Image Marquee */}
      <div className="relative overflow-hidden py-10">
        <div className="flex marquee space-x-8 md:space-x-12 lg:space-x-16">
          {image.map((photo, index) => {

            const width = photo?.width || 400;
            const height = photo?.height || 300;

            return (
              <div key={photo.id || index} className="flex-shrink-0">
                <StrapiImage
                  src={photo}
                  alt={photo.name || "Life at Cygnus"}
                  width={width}
                  height={height}
                  className={`object-cover rounded-lg shadow-lg transition-transform duration-300 ${
                    index % 2 === 0 ? "translate-y-12" : "-translate-y-4"
                  }`}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxHeight: "200px",
                    borderRadius: "1rem",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LifeAtCygnus;
