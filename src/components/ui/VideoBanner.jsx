"use client";
import { LayoutTextFlip } from "../ui/LayoutFlipText";
import { motion } from "motion/react";
import React from "react";

const VideoBanner = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/bgimages/mov.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 lg:bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          <motion.div className="mb-6">
            <LayoutTextFlip
              text="Cygnus"
              words={[
                "Infrastructure",
                "Cybersecurity",
                "AI Solutions",
                "Innovation",
              ]}
            />
          </motion.div>

          <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl font-medium max-w-2xl mx-auto">
            Accelerating enterprises with high-performance infrastructure and
            future-ready digital ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
