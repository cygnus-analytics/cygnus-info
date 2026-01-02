import { motion } from "framer-motion";
import img1 from "../../../../public/industrypics/Manufacturing/data.jpg";
import img2 from "../../../../public/industrypics/Manufacturing/itinfra.jpg";
import img3 from "../../../../public/industrypics/Manufacturing/robot.jpg";
import img5 from "../../../../public/industrypics/Manufacturing/cyber.jpg";
import img4 from "../../../../public/industrypics/Manufacturing/cybersec.jpg";
import img6 from "../../../../public/industrypics/Manufacturing/analytics.jpg";
import img7 from "../../../../public/industrypics/Manufacturing/automation.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Manufacturing = () => {
  const cardData = [
    {
      title: "Enterprise Resource Planning (ERP)",
      description:
        "Implement ERP systems to streamline operations, improve resource management, and provide real-time insights across manufacturing processes.",
      image: "/industrypics/Manufacturing/data.jpg",
    },
    {
      title: "IT Infrastructure Management",
      description:
        "Develop and maintain scalable, reliable IT infrastructures that support mission-critical manufacturing operations, from production to distribution.",
      image: "/industrypics/Manufacturing/itinfra.jpg",
    },
    {
      title: "Industrial IoT (IoT) Integration",
      description:
        "Leverage IoT devices and sensors to monitor equipment, track inventory, and improve predictive maintenance, reducing downtime and increasing productivity.",
      image: "/industrypics/Manufacturing/robot.jpg",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Protect sensitive operational data and critical infrastructure from cyber threats, ensuring compliance with industry standards and maintaining the integrity of manufacturing systems.",
      image: "/industrypics/Manufacturing/cybersec.jpg",
    },
    {
      title: "Cloud Solutions for Manufacturing",
      description:
        "Enable seamless data storage and real-time collaboration across teams with cloud-based solutions tailored to the manufacturing sector, ensuring scalability and flexibility.",
      image: "/industrypics/Manufacturing/cyber.jpg",
    },
    {
      title: "Data Analytics and Business Intelligence",
      description:
        "Use data analytics to optimize production processes, predict trends, and make informed decisions that drive operational excellence.",
      image: "/industrypics/Manufacturing/analytics.jpg",
    },
    {
      title: "Automation and Robotics Solutions",
      description:
        "Implement advanced automation systems and robotics to streamline production lines, reduce errors, and improve efficiency.",
      image: "/industrypics/Manufacturing/automation.jpg",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="flex flex-col items-center gap-6 p-6 rounded-[24px] bg-white shadow-md hover:shadow-lg transition-shadow"
            style={{
              boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            {/* Number */}
            <div className="self-start w-12 h-12 bg-blue-900 text-white rounded-full flex justify-center items-center text-lg font-bold">
              {index + 1}
            </div>

            {/* Title */}
            <h3 className="text-center text-[#25272B] font-poppins text-lg sm:text-xl font-medium leading-snug">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 text-sm sm:text-base">
              {card.description}
            </p>

            {/* Image */}
            <div className="w-full aspect-[4/3] rounded-[24px] border border-[#E8E8E8] overflow-hidden">
              <img loading="lazy"
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Manufacturing;
