"use client";
import React from "react";
import { caseData } from "../../../../public/assets";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function CaseStudiesCard({ params }) {
  const { slug } = React.use(params);
  const card = caseData.find((item) => item.slug === slug);

  if (!card) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold">Case Study not found</h2>
        <Link href="/casestudies" className="text-blue-500 underline">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  const randomCaseStudies = caseData
    .filter((item) => item.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <div className="mx-auto bg-white pb-24">
      {/* Banner with Heading */}
      <div className="relative w-full">
        <motion.img
          src={card.image}
          alt={card.heading}
          className="w-full h-[220px] sm:h-[320px] md:h-[400px] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Heading Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 
           className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide leading-tight">
              {card.heading}
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl flex flex-col py-12 gap-y-12 px-4 sm:px-6 lg:px-8">
        {/* Challenge */}
        <motion.div
          className="flex flex-col items-center gap-4 pt-6"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          <p className="text-center text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
            {card.challenge}
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="flex flex-col items-center gap-4 pt-6"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <p className="text-center text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
            {card.solution}
          </p>
        </motion.div>

        {/* Result */}
        <motion.div
          className="flex flex-col items-center gap-4 pt-6"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <p className="text-center text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
            {card.result}
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
            {randomCaseStudies.map((randomCard, index) => (
              <Link
                href={`/casestudies/${randomCard.slug}`}
                key={index}
                className="w-full max-w-xs group"
              >
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-lg h-96 sm:h-80 bg-cover bg-center flex flex-col justify-end"
                  style={{
                    backgroundImage: `url(${randomCard.image})`,
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                  <div className="z-10 p-4">
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
