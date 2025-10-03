import nd1 from "../../../../public/solutionpics/nd1.jpg";
import nd2 from "../../../../public/solutionpics/nd2.jpg";
import nd3 from "../../../../public/solutionpics/nd3.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Network = () => {
  const networkData = [
    {
      title: "Network Design",
      description:"Build secure, scalable, and high-performance networks tailored to your business. Our designs ensure seamless connectivity, redundancy, and future-ready architecture for enterprise, campus, and hybrid cloud environments.",
      image: "solutionpics/nd1.jpg",
    },
    {
      title: "Active/Passive Networking",
      description: "Deploy reliable active solutions like switches, routers, and firewalls, paired with structured cabling and fiber systems. We deliver integrated, high-speed infrastructure that maximizes uptime and performance.",
      image: "solutionpics/nd2.jpg",
    },
    {
      title: "Network Management Tools",
      description: "Gain real-time visibility and control with advanced monitoring, fault detection, and performance analytics. Our tools help optimize traffic, prevent downtime, and ensure smooth business operations.",
      image: "solutionpics/nd3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-4"
      >
        Network
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto pb-10"
      >
        Building a Connected and Efficient Digital Infrastructure
      </motion.h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10"
      >
        {networkData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover rounded-md aspect-[4/3] bg-blue-50"
              loading="lazy"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-center mb-2 font-poppins">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 text-justify">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Network;