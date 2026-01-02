"use client";
import { ContainerScroll } from "../ui/ContainerScroll";
import { motion } from "framer-motion";

const HeroScrollDemo = ({ data }) => {
  if (!data) return null;

  const { title, description, image } = data;

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
              className="text-md sm:text-md md:text-lg text-gray-600 max-w-4xl mx-auto mb-20"
            >
              {description?.trim() ||
                "Accelerate complex computations and data-intensive workflows with our HPC Cluster solutions."}
            </motion.p>
          </>
        }
      >
        {image?.url?.endsWith(".mp4") ? (
          <video
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
            className="mx-auto rounded-2xl object-cover h-full w-full"
            autoPlay
            muted
            loop
          />
        ) : (
          <video
            src="/solutionpics/hpc.mp4"
            className="mx-auto rounded-2xl object-cover h-full w-full"
            autoPlay
            muted
            loop
          />
        )}
      </ContainerScroll>
    </div>
  );
};

export default HeroScrollDemo;
