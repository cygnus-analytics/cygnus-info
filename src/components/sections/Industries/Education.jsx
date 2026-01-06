import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15, // stagger
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Education = ({cards}) => {
  const cardData = [
    {
      title: "Data Center Setup",
      description:
        "Build robust and scalable data centers to support educational institutions' digital infrastructure needs, ensuring high availability and security.",
    },
    {
      title: "Examination Solutions",
      description:
        "Implement secure, efficient, and digital examination systems, including online assessment platforms and proctoring tools.",
    },
    {
      title: "IT Infrastructure Services",
      description:
        "Modernize educational facilities with advanced IT infrastructure tailored for academic requirements.",
    },
    {
      title: "Facility Management Services (FMS)",
      description:
        "Ensure smooth operation and maintenance of computer labs and IT facilities with dedicated support and management.",
    },
    {
      title: "Computer Lab Setup",
      description:
        "Design and deploy state-of-the-art computer labs equipped with the latest hardware and software to foster an engaging learning experience.",
    },
    {
      title: "Software Updates",
      description:
        "Provide the latest software solutions for students, including learning management systems, productivity tools, and subject-specific applications, ensuring they stay ahead in a digital world.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-4 p-6 rounded-[40px] bg-white shadow-md hover:shadow-lg transition-shadow"
            style={{
              boxShadow: "0px 0px 60px 0px rgba(28, 49, 130, 0.06)",
            }}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            {/* Number Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EDF0FF] text-[#1C3182] rounded-full flex justify-center items-center text-lg sm:text-xl font-bold">
              {index + 1}
            </div>

            {/* Title */}
            <h3 className="text-center text-lg sm:text-xl font-semibold">
              {card?.title}
            </h3>

            {/* Description */}
            <p className="text-center text-sm sm:text-base text-gray-600">
              {card?.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
