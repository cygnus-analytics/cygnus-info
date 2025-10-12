"use client";
import React from "react";
import { motion } from "framer-motion";
import StrapiImage from "../../ui/StrapiImage";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Network = ({ data }) => {
  if (!data || !data.Section) return null;

  const { Section } = data;
  const cards = Section.Card || [];

  return (
    <section className="py-20 bg-gray-50 px-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-4"
      >
        {Section.title || "Network"}
      </motion.h2>

      {/* Description */}
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto pb-10"
      >
        {Section.description?.trim()}
      </motion.h3>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10"
      >
        {cards.map((item, index) => (
          <motion.div
            key={item.id || index}
            variants={itemVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg"
          >
            {/* Image */}
            {item.image && (
              <StrapiImage
                src={item.image}
                alt={item.title || "Network Image"}
                className="w-full h-auto object-cover rounded-md aspect-[4/3] bg-blue-50"
                width={400} // adjust width
                height={300} // adjust height
              />
            )}

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-center mb-2 font-poppins">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 text-justify">
              {item.description?.trim()}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Network;
