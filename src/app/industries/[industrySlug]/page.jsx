"use client"
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import BankingFinance from "../../../components/sections/Industries/BankingFinance";
import OilAndGas from "../../../components/sections/Industries/OilAndGas";
import Education from "../../../components/sections/Industries/Education";
import Manufacturing from "../../../components/sections/Industries/Manufacturing";
import ConsumerSector from "../../../components/sections/Industries/ConsumerSector";
import SmallMediumBusiness from "../../../components/sections/Industries/SmallMediumBusiness";

import BankingBanner from "../../../../public/industrypics/Banking/banner.jpg";
import OilAndGasBanner from "../../../../public/industrypics/Oil/banner.jpg";
import EducationBanner from "../../../../public/industrypics/Education/classic-american-school-2025-02-11-21-11-14-utc-2.jpg";
import ManufacturingBanner from "../../../../public/industrypics/Manufacturing/industrial-worker-inspecting-and-check-up-machine-2025-03-14-13-22-31-utc.jpg";
import ConsumerSectorBanner from "../../../../public/industrypics/ConsumerSector/banner.jpg";
import SmallMediumBusinessBanner from "../../../../public/industrypics/Smb/banner.jpg";

const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const industries = [
  {
    name: "Banking & Finance",
    slug: createSlug("Banking & Finance"),
    description: "In the ever-evolving world of banking and finance, innovation and security are key drivers of success. We offer comprehensive solutions designed to meet the unique needs of financial institutions, empowering them to thrive in today’s competitive landscape.",
    banner: BankingBanner,
  },
  {
    name: "Oil & Gas",
    slug: createSlug("Oil and Gas"),
    description: "The oil and gas industry demands cutting-edge solutions to address its unique challenges, from optimizing operations to ensuring robust security. We deliver comprehensive IT infrastructure, cybersecurity, and cloud solutions designed to transform your business and drive operational excellence.",
    banner: OilAndGasBanner,
  },
  {
    name: "Education",
    slug: createSlug("Education"),
    description: "Empowering the education sector with innovative technology solutions, we help institutions create a future-ready learning environment. Our expertise ensures seamless integration of technology to enhance teaching, learning, and operational efficiency.",
    banner: EducationBanner,
  },
  {
    name: "Manufacturing",
    slug: createSlug("Manufacturing"),
    description: "In the manufacturing sector, technology plays a pivotal role in driving operational efficiency, enhancing production quality, and ensuring business continuity. We provide comprehensive IT solutions that meet the unique challenges of the industry, ensuring seamless integration and optimization of manufacturing processes.",
    banner: ManufacturingBanner,
  },
  {
    name: "Consumer Sector",
    slug: createSlug("Consumer Sector"),
    description: "The consumer sector thrives on agility, innovation, and the ability to adapt to evolving customer demands. We offer tailored IT solutions to empower businesses in this sector, ensuring they have the infrastructure and tools needed to excel in a competitive market.",
    banner: ConsumerSectorBanner,
  },
  {
    name: "Small & Medium Business (SMB)",
    slug: createSlug("Small and Medium Business (SMB)"),
    description: "Small and medium businesses require cost-effective, scalable, and secure IT solutions to thrive in a competitive environment. We provide tailored services to meet the specific needs of SMBs, empowering them to focus on growth while we handle their technology requirements.",
    banner: SmallMediumBusinessBanner,
  },
];

const componentMap = {
  [createSlug("Banking & Finance")]: <BankingFinance />,
  [createSlug("Oil and Gas")]: <OilAndGas />,
  [createSlug("Education")]: <Education />,
  [createSlug("Manufacturing")]: <Manufacturing />,
  [createSlug("Consumer Sector")]: <ConsumerSector />,
  [createSlug("Small and Medium Business (SMB)")]: <SmallMediumBusiness />,
};

const Industries = () => {
  const { industrySlug } = useParams();
  const router = useRouter();
  const selected = industries.find((i) => i.slug === industrySlug) || industries[0];
  
  useEffect(() => {
    if (!industrySlug) {
      router.replace(`/industries/${industries[0].slug}`);
    }
  }, [industrySlug, router]);

  const handleTabClick = (slug) => {
    router.push(`/industries/${slug}`);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between w-full border border-indigo-200 shadow-xl h-auto rounded-full px-2 py-1 md:px-4 md:py-2 overflow-x-auto whitespace-nowrap">
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
};

export default Industries;