"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import BankingFinance from "../sections/Industries/BankingFinance";
import OilAndGas from "../sections/Industries/OilAndGas";
import Education from "../sections/Industries/Education";
import Manufacturing from "../sections/Industries/Manufacturing";
import ConsumerSector from "../sections/Industries/ConsumerSector";
import SmallMediumBusiness from "../sections/Industries/SmallMediumBusiness";

const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const componentMap = {
  [createSlug("Banking & Finance")]: <BankingFinance />,
  [createSlug("Oil and Gas")]: <OilAndGas />,
  [createSlug("Education")]: <Education />,
  [createSlug("Manufacturing")]: <Manufacturing />,
  [createSlug("Consumer Sector")]: <ConsumerSector />,
  [createSlug("Small and Medium Business (SMB)")]: <SmallMediumBusiness />,
};

export default function IndustriesClient({ industries, selected }) {
  const router = useRouter();

  useEffect(() => {
    if (!selected) {
      router.replace(`/industries/${industries[0].slug}`);
    }
  }, [selected, router, industries]);

  const handleTabClick = (slug) => {
    router.push(`/industries/${slug}`);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between w-full border border-indigo-200 shadow-xl h-auto rounded-full px-2 py-1 md:px-4 md:py-2  overflow-x-auto whitespace-nowrap">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(industry.slug)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition cursor-pointer ${
                selected.slug === industry.slug
                  ? "bg-indigo-200 text-blue-900"
                  : "text-blue-900 hover:bg-[#F2F5FF]"
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.slug}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative h-[16rem] md:h-[20rem] bg-gray-200 mt-10"
          style={{
            backgroundImage: `url(${selected?.banner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>
          <div className="absolute inset-0 flex justify-center items-center px-4">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide leading-tight"
            >
              {selected?.name}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.slug + "-desc"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-8 px-4"
        >
          <p className="text-center max-w-5xl mx-auto text-sm sm:text-base text-[#25272B] font-poppins leading-relaxed tracking-wide">
            {selected?.description}
          </p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.slug + "-component"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          {componentMap[selected.slug]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
