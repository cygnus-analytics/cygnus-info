"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import StrapiImage from "../../ui/StrapiImage"; 

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const getRichText = (nodes) => {
  if (!nodes || !Array.isArray(nodes)) return "";
  return nodes
    .map((node) => node.children?.map((child) => child.text).join(""))
    .join("\n\n");
};

export default function CaseStudiesCard({ currentStudy, allStudies = [] }) {
  if (!currentStudy) return null;

  const randomCaseStudies = allStudies
    .filter((item) => item.slug !== currentStudy.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <div className="mx-auto bg-white pb-24">
      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[400px]">
        <StrapiImage
          src={currentStudy.image}
          alt={currentStudy.heading}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h1 className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide leading-tight">
            {currentStudy.heading}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl flex flex-col py-12 gap-y-12 px-4 sm:px-6 lg:px-8">
        {/* Challenge Section */}
        <motion.div
          className="flex flex-col items-center gap-4 pt-6"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          <p className="text-center text-neutral-800 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
            {getRichText(currentStudy.challenge)}
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          className="flex flex-col items-center gap-4 pt-6"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <p className="text-center text-neutral-800 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
            {getRichText(currentStudy.solution)}
          </p>
        </motion.div>

        {/* Result Section */}
        <motion.div
          className="flex flex-col items-center gap-4 pt-6"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <p className="text-center text-neutral-800 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
            {getRichText(currentStudy.result)}
          </p>
        </motion.div>

        {/* Related Case Studies */}
        <motion.div
          className="mt-16 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0.4}
        >
          <h4 className="text-center text-lg sm:text-xl font-semibold mb-8">
            Related Case Studies
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {randomCaseStudies.map((randomCard) => (
              <Link
                href={`/casestudies/${randomCard.slug}`}
                key={randomCard.slug}
                className="w-full max-w-xs group"
              >
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-lg h-96 sm:h-80 flex flex-col justify-end"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <StrapiImage 
                    src={randomCard.image} 
                    alt={randomCard.heading} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300 z-10"></div>
                  <div className="z-20 p-4">
                    <h2 className="font-semibold text-base sm:text-lg text-white">
                      {randomCard.heading}
                    </h2>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}