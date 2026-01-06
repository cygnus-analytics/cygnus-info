"use client";
import React from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import TrueFocus from "@/components/ui/TrueFocus";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CyberSecurity = ({ data }) => {
  if (!data || !data.Section) return null;

  const { Section } = data;
  const cards = Section.Card || [];

  return (
    <section className="h-auto py-40 px-4 sm:px-6 lg:px-10 bg-white">
      <TrueFocus
        sentence={Section.title || "Cyber Security"}
        manualMode={false}
        blurAmount={3}
        borderColor="#2f48a5"
        animationDuration={1}
        pauseBetweenAnimations={1}
      />

      {/* Description */}
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-md sm:text-lg text-gray-600 pb-10 max-w-7xl mx-auto text-left"
      >
        {Section.description?.trim()}
              </motion.h3>

      {/* Grid of Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {cards.map((item, index) => (
          <motion.div
            key={item.id || index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group bg-gradient-to-br from-green-500 via-sky-400 to-blue-500 relative p-6 hover:p-8 rounded-xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer h-32 sm:h-32 md:h-28 lg:h-32 hover:h-[20rem] sm:hover:h-[44rem] md:hover:h-[32rem] lg:hover:h-[28rem] shadow-lg"
          >
            {/* Front Face */}
            <motion.div className="absolute text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 inset-0 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
              <h2 className="text-lg sm:text-xl font-semibold text-center text-white mb-2">
                {item.title}
              </h2>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <FaLock className="mt-3 w-6 h-6 sm:w-7 sm:h-7" />
              </motion.div>
            </motion.div>

            {/* Back Face */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <p className="text-sm sm:text-base text-center text-white">
                {item.description}
              </p>
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FaLockOpen className="mt-5 w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CyberSecurity;
