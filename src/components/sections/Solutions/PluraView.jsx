"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const products = [
  {
    name: "3D PluraView",
    tagline: "Stereo 3D Visualization Monitors",
    description:
      "3D PluraView monitors deliver flicker-free, high-precision 3D visualization for GIS, CAD & medical workflows—enhancing accuracy and productivity.",
  },
  {
    name: "LASER VR Wall",
    tagline: "Immersive Large-Scale Collaboration",
    description:
      "LASER VR Wall offers immersive 6K 3D collaboration for simulations, design reviews & multi-team decision-making.",
  },
  {
    name: "3D GlobeView",
    tagline: "Large-Format Stereo Displays",
    description:
      "3D GlobeView large displays provide 80\" 4K stereo visualization for conference rooms, control centers & real-time data analysis.",
  },
];

const carouselImages = [
  { src: "/solutionpics/pluraview.png", alt: "3D PluraView stereo monitor" },
  { src: "/solutionpics/vrwall.webp", alt: "LASER VR Wall" },
  { src: "/solutionpics/globeview.webp", alt: "3D GlobeView large display" },
];

export default function PluraView() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left — carousel */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={carouselImages[current].src}
                  alt={carouselImages[current].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

          </div>
        </motion.div>

        {/* Right — text content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            High-Precision 3D Visualization for Professionals
          </h3>

          <div className="flex items-center gap-3">
            <Image
              src="/logo/schneider.png"
              alt="Schneider Digital"
              width={150}
              height={33}
              className="object-contain bg-blue-800 px-4 py-2 rounded-lg"
            />
          </div>

          <p className="text-base sm:text-lg font-medium text-blue-700">
            Stereo 3D · GIS · CAD · Medical Imaging
          </p>

          <div className="flex flex-col gap-5">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors duration-200"
              >
                <div className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {product.name}
                    <span className="ml-2 text-xs font-medium text-blue-600 bg-blue-100 rounded px-1.5 py-0.5">
                      {product.tagline}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
