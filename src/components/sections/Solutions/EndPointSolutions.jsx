"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StrapiImage from "../../ui/StrapiImage";

const EndPointSolutions = ({ data }) => {
  if (!data || !data.Section) return null;

  const { Section } = data;
  const cards = Section.Card || [];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="py-20 bg-gray-50 px-4">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold mb-4">
          {Section.title || "End Point Solutions"}
        </h2>
        <p className="text-md sm:text-lg md:text-xl text-black max-w-4xl mx-auto mb-12">
          {Section.description?.trim()}
        </p>
      </div>

      {/* Cards */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {cards.map((item, index) => (
          <motion.div
            key={item.id || index}
            className="relative bg-white p-3 sm:p-3 md:p-4 lg:p-6 rounded-xl shadow-xl overflow-hidden group cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4 h-64">
              {item.image && (
                <StrapiImage
                  src={item.image}
                  alt={item.title || "Endpoint Image"}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                  width={400}
                  height={300}
                />
              )}
              <div className="absolute inset-0 bg-blue-900 opacity-20 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>

            {/* Title & Description */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-justify text-gray-600">
                {item.description?.trim()}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EndPointSolutions;
