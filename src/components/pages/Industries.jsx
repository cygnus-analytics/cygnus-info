"use client";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Industry Section Components
import BankingFinance from "../sections/Industries/BankingFinance";
import OilAndGas from "../sections/Industries/OilAndGas";
import Education from "../sections/Industries/Education";
import Manufacturing from "../sections/Industries/Manufacturing";
import ConsumerSector from "../sections/Industries/ConsumerSector";
import SmallMediumBusiness from "../sections/Industries/SmallMediumBusiness";

// Utility
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const staticIndustries = [
  {
    name: "Banking & Finance",
    slug: createSlug("Banking & Finance"),
    description:
      "In the ever-evolving world of banking and finance, innovation and security are key drivers of success.",
    banner: "/industrypics/Banking/banner.jpg",
  },
  {
    name: "Oil & Gas",
    slug: createSlug("Oil and Gas"),
    description:
      "The oil and gas industry demands cutting-edge solutions for efficiency and security.",
    banner: "/industrypics/Oil/banner.jpg",
  },
  {
    name: "Education",
    slug: createSlug("Education"),
    description:
      "Empowering institutions with modern digital infrastructure.",
    banner: "/industrypics/Education/classic-american-school-2025.jpg",
  },
  {
    name: "Manufacturing",
    slug: createSlug("Manufacturing"),
    description:
      "Driving efficiency and automation through smart IT solutions.",
    banner:
      "/industrypics/Manufacturing/industrial-worker-inspecting.jpg",
  },
  {
    name: "Consumer Sector",
    slug: createSlug("Consumer Sector"),
    description:
      "Helping businesses adapt and scale in a competitive market.",
    banner: "/industrypics/ConsumerSector/banner.jpg",
  },
  {
    name: "Small & Medium Business (SMB)",
    slug: createSlug("Small and Medium Business (SMB)"),
    description:
      "Cost-effective and scalable solutions for SMB growth.",
    banner: "/industrypics/Smb/banner.jpg",
  },
];

// Component mapping
const componentMap = {
  [createSlug("Banking & Finance")]: <BankingFinance />,
  [createSlug("Oil and Gas")]: <OilAndGas />,
  [createSlug("Education")]: <Education />,
  [createSlug("Manufacturing")]: <Manufacturing />,
  [createSlug("Consumer Sector")]: <ConsumerSector />,
  [createSlug("Small and Medium Business (SMB)")]: <SmallMediumBusiness />,
};

export default function Industries({ industriesData }) {
  const { industrySlug } = useParams();
  const router = useRouter();

  // ✅ Use backend if available, else fallback to static
  const industries =
    industriesData?.length > 0 ? industriesData : staticIndustries;

  const selected =
    industries.find((i) => i.slug === industrySlug) || industries[0];

  // Redirect if no slug
  useEffect(() => {
    if (!industrySlug && industries.length > 0) {
      router.replace(`/industries/${industries[0].slug}`);
    }
  }, [industrySlug, router, industries]);

  const handleTabClick = (slug) => {
    router.push(`/industries/${slug}`);
  };

  return (
    <div className="py-12">
      {/* Tabs */}
      <div className="max-w-7xl mx-auto">
        <div className="flex w-full border shadow-xl rounded-full px-2 py-1 md:px-4 md:py-2 overflow-x-auto whitespace-nowrap">
          {industries.map((industry) => (
            <button
              key={industry.slug}
              onClick={() => handleTabClick(industry.slug)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition ${
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

      {/* Banner */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.slug}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="relative h-[16rem] md:h-[20rem] mt-10"
          style={{
            backgroundImage: `url(${selected?.banner})`, // ✅ FIXED
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* ✅ Single overlay only */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex justify-center items-center px-4">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl uppercase"
            >
              {selected?.name}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.slug + "-desc"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-8 px-4"
        >
          <p className="text-center max-w-5xl mx-auto text-sm sm:text-base text-[#25272B] leading-relaxed">
            {selected?.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.slug + "-component"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-8"
        >
          {componentMap[selected.slug]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}