"use client";
import { ContainerScroll } from "../ui/ContainerScroll";
import { motion } from "framer-motion";

const HeroScrollDemo = ({ data }) => {
  if (!data) return null;

  const { title, description, image } = data;
  const videoSrc = image?.url?.endsWith(".mp4") 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}` 
    : "/solutionpics/hpc.mp4";

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-4"
            >
              <span className="font-bold mt-1 leading-none">
                {title || "High Performance Computing Cluster"}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-md sm:text-md md:text-lg text-gray-600 max-w-4xl mx-auto mb-10 md:mb-20"
            >
              {description?.trim() ||
                "Accelerate complex computations and data-intensive workflows with our HPC Cluster solutions."}
            </motion.p>
          </>
        }
      >
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <video
            src={videoSrc}
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            muted
            loop
            playsInline 
            webkit-playsinline="true"
            preload="none"
          />
        </div>
      </ContainerScroll>
    </div>
  );
};

export default HeroScrollDemo;