import dc from "../../../../public/solutionpics/1.svg";
import dcs from "../../../../public/solutionpics/2.svg";
import dcm from "../../../../public/solutionpics/3.svg";
import dcp from "../../../../public/solutionpics/4.svg";
import cygnus_logo from "../../../../public/logo/cygnus.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Infrastructure = () => {
  const services = [
    {
      title: "Data Center Solution",
      description:
        "End-to-end design and implementation for smart and conventional data centers.",
      image: "solutionpics/1.svg",
    },
    {
      title: "Data Center Setup",
      description: "Seamless provisioning of robust IT ecosystems.",
      image: "solutionpics/2.svg",
    },
    {
      title: "Data Center Management",
      description:
        "Ensuring efficiency with advanced management tools and audits.",
      image: "solutionpics/3.svg",
    },
    {
      title: "Data Center Provisioning",
      description: "Optimizing infrastructure for performance and scalability.",
      image: "solutionpics/4.svg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold "
      >
        Infrastructure
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-sm md:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto mb-12 mt-4"
      >
        Powering your business with a full suite of state-of-the-art data center and IT infrastructure solutions.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {Array.from({ length: 9 }).map((_, index) => {
          const isEven = index % 2 !== 0;
          const service =
            isEven && services[Math.floor(index / 2) % services.length];

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={isEven ? { scale: 1.03 } : {}}
              transition={{ duration: 0.2 }}
              className={`group ${
                isEven
                  ? "p-6 flex flex-col justify-center items-center rounded-2xl border border-gray-200 shadow-md bg-white h-auto max-w-sm w-full mx-auto cursor-pointer hover:bg-blue-50 transition-colors duration-300"
                  : "bg-transparent"
              }`}
            >
              {index === 4 ? (
                <div className="flex justify-center items-center h-full py-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                    className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 rounded-full w-40 h-40 sm:w-56 sm:h-56 flex justify-center items-center shadow-lg"
                  >
                    <img
                      src="logo/cygnus.png"
                      alt="Cygnus Logo"
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                    />
                  </motion.div>
                </div>
              ) : (
                isEven &&
                service && (
                  <>
                    {/* Concentric Circle Icon */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-center items-center mb-6"
                    >
                      <div className="flex justify-center items-center rounded-full w-28 h-28 sm:w-36 sm:h-36 border border-gray-300 transition-transform duration-300 group-hover:scale-105">
                        <div className="flex justify-center items-center rounded-full w-16 h-16 sm:w-20 sm:h-20 border border-gray-200 transition-transform duration-300 group-hover:scale-110">
                          <img
                            src={service.image}
                            alt={`${service.title} Icon`}
                            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-125"
                          />
                        </div>
                      </div>
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold text-center  mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-center text-gray-600">
                      {service.description}
                    </p>
                  </>
                )
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Infrastructure;