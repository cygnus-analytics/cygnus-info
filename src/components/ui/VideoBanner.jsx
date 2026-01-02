"use client";
import React from "react";
import { LayoutTextFlip } from "../ui/LayoutFlipText";
import { motion } from "motion/react";

const VideoBanner = () => {
  
  const title = "Cygnus";
  const rotatingWords = [
    "Infrastructure",
    "Cybersecurity",
    "Cloud Solutions",
    "Networking",
    "Storage Solutions",
  ];
  const description = "Accelerating enterprises with high-performance infrastructure and future-ready digital ecosystems.";

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="none"
      >
        <source src="/bgimages/mov.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 lg:bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <LayoutTextFlip
              text={title}
              words={rotatingWords}
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl font-medium max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;