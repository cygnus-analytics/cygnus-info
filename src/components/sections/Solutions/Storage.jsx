"use client";
import React from "react";
import CardSwap, { Card } from "../../ui/CardSwap/CardSwap";
import Squares from "../../ui/Squares";
import StrapiImage from "../../ui/StrapiImage";

const Storage = ({ data }) => {
  if (!data || !data.Section) return null;

  const { Section } = data;
  const cards = Section.Card || [];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Squares Animation */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.2}
          squareSize={50}
          direction="diagonal"
          borderColor="#e3e1f4"
          hoverFillColor="#2f48a5"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col mx-auto max-w-6xl md:flex-row">
        {/* Left Text Section */}
        <div className="w-full flex flex-col justify-center px-4 md:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black text-center md:text-left">
            {Section.title || "Storage"}
          </h2>
          <p className="sm:text-base md:text-lg lg:text-lg text-gray-600 text-center md:text-left">
            {Section.description?.trim() ||
              "Explore high-performance, scalable, and intelligent storage options tailored to your business needs."}
          </p>
        </div>

        {/* Right Cards Section */}
        <div className="w-full mt-8 sm:mt-0 md:w-1/2 h-[350px] md:h-[600px] relative">
          <CardSwap
            cardDistance={60}
            verticalDistance={90}
            delay={3000}
            pauseOnHover={true}
          >
            {cards.map((item, index) => (
              <Card
                key={item.id || index}
                className="p-2 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-white border border-gray-200"
              >
                {/* Card Header */}
                <div className="flex gap-2 items-center">
                  <StrapiImage
                    src={item.icon}
                    alt={item.title || "Icon"}
                    className="h-8 mb-1"
                    width={32}
                    height={32}
                  />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>

                {/* Card Body */}
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>

                <hr className="border-t-2 w-full border-gray-700 mb-2" />

                {/* Full Image */}
                {item.image && (
                  <StrapiImage
                    src={item.image}
                    alt={`${item.title} solution`}
                    className="w-full h-[19rem] rounded-md object-cover"
                    width={600}
                    height={300}
                  />
                )}
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Storage;
