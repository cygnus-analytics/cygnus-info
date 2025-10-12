"use client";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import StrapiImage from "../../ui/StrapiImage";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const PrincipleCard = ({ image, title, description, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="flex flex-col h-full shadow-lg"
    whileHover={{ scale: 1.02 }}
  >
    {/* Image */}
    <motion.div className="w-full overflow-hidden shadow-md bg-gray-50">
      <StrapiImage
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-[20rem] object-cover rounded-t-lg"
      />
    </motion.div>

    <div className="flex flex-col flex-grow px-4 py-8 bg-gradient-to-r from-neutral-100 to-neutral-200 rounded-b-lg">
      <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-3">
        {title}
      </h3>
      <p className="text-md leading-relaxed flex-grow text-gray-600">
        {description}
      </p>
    </div>
  </motion.div>
);

const Products = ({ data }) => {

  if (!data?.productCards || !Array.isArray(data.productCards)) {
    return null;
  }

  const { title, description, productCards } = data;

  return (
    <section className="pt-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg md:text-lg text-gray-600 mb-12 max-w-4xl mx-auto text-center"
        >
          {description}
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-10">
          {productCards.map((item, index) => {
            const isLastCentered =
              index === productCards.length - 1 && productCards.length % 3 !== 0;

            return (
              <div
                key={item.id || index}
                className={cn(
                  "flex",
                  isLastCentered
                    ? "col-span-1 sm:col-span-2 md:col-span-1 md:col-start-2 justify-center"
                    : ""
                )}
              >
                <PrincipleCard
                  index={index}
                  image={item.Image}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
