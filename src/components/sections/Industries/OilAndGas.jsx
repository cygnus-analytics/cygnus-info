import { motion } from "framer-motion";
import image1 from "../../../../public/industrypics/Oil/4.jpg";
import image2 from "../../../../public/industrypics/Oil/3.jpg";
import image3 from "../../../../public/industrypics/Oil/2.jpg";
import image4 from "../../../../public/industrypics/Oil/1.jpg";

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const OilAndGas = () => {
  const cardData = [
    {
      title: "IT Infrastructure Solutions",
      description:
        "Modernize and scale your operations with state-of-the-art IT infrastructure, including on-premises, hybrid, and edge computing solutions tailored to the energy sector.",
      image: "/industrypics/Oil/4.jpg",
    },
    {
      title: "Cloud Solutions with HPE GreenLake",
      description:
        "Leverage the flexibility and scalability of cloud services through HPE GreenLake, enabling you to optimize workloads, reduce costs, and access real-time insights for smarter decision-making.",
        image: "/industrypics/Oil/3.jpg",
      },
    {
      title: "Cybersecurity Services",
      description:
        "Safeguard your critical data and operational technologies from cyber threats with advanced cybersecurity frameworks, ensuring business continuity and compliance.",
        image: "/industrypics/Oil/2.jpg",
      },
    {
      title: "Asset Management and Monitoring",
      description:
        "Integrate IoT-enabled sensors and AI-driven analytics for real-time asset monitoring and predictive maintenance, reducing downtime and enhancing productivity.",
        image: "/industrypics/Oil/1.jpg",
      },
  ];

  return (
    <section className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-12">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-6 w-full max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-md`}
            style={{ boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.06)" }}
            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-60">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OilAndGas;
