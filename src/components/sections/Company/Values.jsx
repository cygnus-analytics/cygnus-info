"use client";
import { AiOutlineEye } from "react-icons/ai";
import { FaTools, FaHandsHelping } from "react-icons/fa";
import { BsLightbulb } from "react-icons/bs";
import { motion } from "framer-motion";

const Values = ({ data }) => {
  if (!data) return null;

  const icons = [
    <AiOutlineEye className="text-blue-800 size-8" />,
    <FaTools className="text-blue-800 size-8" />,
    <FaHandsHelping className="text-blue-800 size-8" />,
    <BsLightbulb className="text-blue-800 size-8" />,
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-blue-400 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-blue-900 mb-4"
        >
          {data.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 leading-relaxed mb-12"
        >
          {data.description}
        </motion.p>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.Values?.map((val, index) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white rounded-lg shadow-lg transition-transform"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">{icons[index % icons.length]}</div>
                <h3 className="text-lg font-semibold text-blue-900">
                  {val.title}
                </h3>
              </div>
              <p className="text-gray-600">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
