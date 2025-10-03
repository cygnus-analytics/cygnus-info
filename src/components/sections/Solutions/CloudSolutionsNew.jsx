"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const InfoCard = ({ image, title, content, reverse, index }) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center gap-6 shadow-lg my-10 rounded-lg overflow-hidden bg-gradient-to-r from-neutral-50 to-neutral-100 hover:bg-gradient-to-br hover:from-neutral-50 hover:via-neutral-100 hover:via-70% hover:to-blue-300 ${
        reverse ? "md:flex-row-reverse bg-gradient-to-r from-neutral-50 to-neutral-100 hover:bg-gradient-to-tl hover:from-neutral-50 hover:via-neutral-100 hover:via-70% hover:to-blue-300" : ""
      }`}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      custom={reverse ? "right" : "left"}
    >
      {/* Image container */}
      <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-92">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col space-y-3 p-6 sm:p-8">
        <motion.h2
          className="text-xl sm:text-xl md:text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {content}
        </motion.p>
      </div>
    </motion.div>
  );
};

const InfoSection = () => {
  const data = [
    {
      id: 1,
      image: "/solutionpics/cloud1.jpg",
      title: "Public Cloud",
      content:
        "Public clouds are owned and operated by third-party providers and deliver computing resources over the internet. They offer scalability, cost-effectiveness, and easy access to services without infrastructure management.",
    },
    {
      id: 2,
      image: "/solutionpics/cloud2.jpg",
      title: "Private Cloud",
      content:
        "Private clouds are dedicated environments used exclusively by one organization. They offer enhanced security, control, and customization, making them ideal for sensitive data and regulatory compliance.",
    },
    {
      id: 3,
      image: "/solutionpics/cloud3.jpeg",
      title: "Hybrid Cloud",
      content:
        "Hybrid clouds combine public and private clouds, allowing organizations to leverage the benefits of both. They offer flexibility, cost optimization, and seamless integration of on-premises and cloud resources.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl lg:text-4xl text-black font-semibold mb-4"
        >
          Cloud Solutions
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12"
        >
          Transform your business with flexible and secure cloud computing
          architectures designed for modern demands.
        </motion.p>

        {/* Info Cards */}
        {data.map((item, index) => (
          <InfoCard
            key={item.id}
            image={item.image}
            title={item.title}
            content={item.content}
            reverse={item.id === 2}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;

