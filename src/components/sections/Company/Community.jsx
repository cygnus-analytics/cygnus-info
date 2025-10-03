"use client";
import { motion } from "framer-motion";
import CountUp from "../../ui/CountUp";

const stats = [
  { label: "Projects Delivered", count: 320 },
  { label: "Happy Clients", count: 125 },
  { label: "Retention Rate (%)", count: 98 },
];

const Community = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-900 mb-4"
        >
          Join a Vision Community
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto"
        >
          Our high client retention reflects our reliability in the industry.
          With our mantra of being ‘consultant first,’ we possess a unique
          combination of business acumen and technical skills. We ensure that
          you grab new opportunities and move miles ahead of your competitors
          with our adaptive, agile, effective, and efficient solutions and
          service delivery.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto max-w-5xl items-center-safe">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: index * 0.15 + 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={` rounded-lg shadow-lg transition-transform flex flex-col items-center justify-center p-6 
                ${index === 1 ? "sm:h-52 bg-blue-100" : "sm:h-48 bg-blue-50"}`}
            >
              <CountUp
                from={0}
                to={stat.count}
                separator=","
                duration={1.5}
                className="text-5xl font-bold text-blue-800 mb-2"
              />
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
