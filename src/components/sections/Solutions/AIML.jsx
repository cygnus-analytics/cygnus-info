import { motion } from "framer-motion";
import Loader from "../../ui/Loader";
import i from "../../../../public/solutionpics/11.svg";
import pa from "../../../../public/solutionpics/12.svg";
import ig from "../../../../public/solutionpics/13.svg";

const features = [
  { icon: "/solutionpics/11.svg", title: "Innovation" },
  { icon: "/solutionpics/12.svg", title: "Process Automation" },
  { icon: "/solutionpics/13.svg", title: "Insight Generation" },
];

const AIML = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50">
      {/* Heading */}
      <motion.h2
        className="text-center text-4xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        AI/ML
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="text-[#000] text-center font-poppins text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Leverage artificial intelligence and machine learning to unlock insights,
        automate processes, and drive innovation.
      </motion.p>

      {/* Content Grid */}
      <div className="mt-12 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Features */}
        <div className="flex flex-col gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.img
                src={feature.icon}
                alt={`${feature.title} Icon`}
                className="w-16 h-16 drop-shadow-md"
                whileHover={{ rotate: 10, scale: 1.1 }}
              />
              <p className="text-center text-lg md:text-xl font-semibold text-[#25272B]">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Column - Loader */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Loader />
        </motion.div>
      </div>
    </section>
  );
};

export default AIML;
