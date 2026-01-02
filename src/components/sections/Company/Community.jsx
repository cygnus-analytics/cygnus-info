"use client";
import { motion } from "framer-motion";
import CountUp from "../../ui/CountUp";
import StrapiImage from "@/components/ui/StrapiImage";

const Community = ({ data }) => {
  if (!data) return null;

  const { title, description, Stats, image } = data;

  // Split multiline description from Strapi
  const paragraphs = description ? description.split("\n").filter(Boolean) : [];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        {image && (
          <div className="mb-10 flex justify-center">
            <StrapiImage
              src={image}
              alt={title || "Vision Image"}
              width={800}
              height={400}
              className="rounded-2xl object-cover w-full max-w-4xl"
            />
          </div>
        )}

        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4"
        >
          {title}
        </motion.h3>

        {paragraphs.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-neutral-600 leading-relaxed mb-12 max-w-4xl mx-auto text-md sm:text-md md:text-lg lg:text-lg"
          >
            {para}
          </motion.p>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto max-w-5xl items-center-safe">
          {Stats?.map((stat, index) => (
            <motion.div
              key={stat.id || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className={`rounded-lg shadow-lg transition-transform flex flex-col items-center justify-center p-6 
                ${index === 1 ? "sm:h-52 bg-blue-400/40" : "sm:h-48 bg-blue-100/80"}`}
            >
              <CountUp
                from={0}
                to={Number(stat.count)}
                separator=","
                duration={1.5}
                className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-tr from-blue-500 to-blue-900 mb-3"
              />
              <p className="text-neutral-900 font-medium text-md sm:text-md md:text-md lg:text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
