"use client";

import { LayoutTextFlip } from "../ui/LayoutFlipText";
import { motion } from "motion/react";
import React, { useEffect, useRef } from "react";

const VideoBanner = ({ data }) => {
  const videoRef = useRef(null);

  if (!data) return null;

  const cloudinaryUrl = "https://res.cloudinary.com/duhhwugqb/video/upload/v1760436249/mov_copy_3b8222aba3.mp4";

  useEffect(() => {
    // Force video to play on mount
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={cloudinaryUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 lg:bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          <motion.div className="mb-6">
            <LayoutTextFlip
              text={data.title || "Cygnus"}
              words={[
                "Infrastructure",
                "Cybersecurity",
                "AI Solutions",
                "Innovation",
              ]}
            />
          </motion.div>

          <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl font-medium max-w-2xl mx-auto">
            {data.description ||
              "Accelerating enterprises with high-performance infrastructure and future-ready digital ecosystems."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;