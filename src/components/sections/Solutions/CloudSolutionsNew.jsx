"use client";

import { motion } from "framer-motion";
import StrapiImage from "../../ui/StrapiImage";

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

const InfoCard = ({ image, title, content, reverse }) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center gap-6 shadow-lg my-10 rounded-lg overflow-hidden bg-gradient-to-r from-neutral-50 to-neutral-100 hover:bg-gradient-to-br hover:from-neutral-50 hover:via-neutral-100 hover:via-70% hover:to-blue-300 ${
        reverse
          ? "md:flex-row-reverse bg-gradient-to-r from-neutral-50 to-neutral-100 hover:bg-gradient-to-tl hover:from-neutral-50 hover:via-neutral-100 hover:via-70% hover:to-blue-300"
          : ""
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      custom={reverse ? "right" : "left"}
    >
      <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-92">
        <StrapiImage
          src={image}
          alt={title}
          className="object-cover object-center"
          fill
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

const InfoSection = ({ data }) => {
  if (!data || !data.Section) return null;

  const { Section } = data;
  const cards = Section.Card || [];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl lg:text-4xl text-black font-semibold mb-4"
        >
          {Section.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12"
        >
          {Section.description?.trim()}
        </motion.p>

        {cards.map((card, index) => (
          <InfoCard
            key={card.id}
            image={card.image}
            title={card.title}
            content={card.description}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
