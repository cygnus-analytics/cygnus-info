"use client";
import { motion } from "framer-motion";
import { FocusCards } from "../../ui/FocusCards";

const AIMLNew = ({ data }) => {
  if (!data || !data.Section) return null;

  const { Section } = data;
  const cards = Section.Card || [];

  // ✅ Format Strapi data to match FocusCards props
  const formattedCards = cards.map((card) => ({
    title: card.title,
    description: card.description?.trim(),
    image: card.image, // pass the full Strapi image object
  }));

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        {/* ✅ Dynamic Heading */}
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {Section.title}
        </motion.h2>

        {/* ✅ Dynamic Subheading */}
        <motion.p
          className="text-gray-600 text-center font-poppins text-lg md:text-lg max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {Section.description?.trim()}
        </motion.p>

        {/* ✅ Pass formatted cards */}
        <FocusCards cards={formattedCards} />
      </div>
    </section>
  );
};

export default AIMLNew;
