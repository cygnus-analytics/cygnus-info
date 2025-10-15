import { motion } from "framer-motion";
import digitalBanking from "../../../../public/industrypics/Banking/digital-banking.jpg";
import RiskManagement from "../../../../public/industrypics/Banking/Risk-Management.jpg";
import CustomerExperience from "../../../../public/industrypics/Banking/Customer-Experience.jpg";
import DataAnalytic from "../../../../public/industrypics/Banking/Data-Analytic.jpg";
import Payments from "../../../../public/industrypics/Banking/Payments.jpg";
import Core from "../../../../public/industrypics/Banking/Core.jpg";
import CyberSecurity from "../../../../public/industrypics/Banking/cs.jpg";
import svg1 from "../../../../public/industrypics/Banking/7.svg";
import svg2 from "../../../../public/industrypics/Banking/2.svg";
import svg3 from "../../../../public/industrypics/Banking/3.svg";
import svg4 from "../../../../public/industrypics/Banking/6.svg";
import svg5 from "../../../../public/industrypics/Banking/4.svg";
import svg6 from "../../../../public/industrypics/Banking/5.svg";
import svg7 from "../../../../public/industrypics/Banking/1.svg";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const BankingFinance = () => {
  
  const cardData = [
    {
      title: "Cybersecurity Solutions",
      description:
        "Partnered with Arcon, we deliver advanced cybersecurity services to safeguard critical financial data, ensure regulatory compliance, and protect against emerging cyber threats.",
      image: "/industrypics/Banking/cs.jpg",
      icon: "/industrypics/Banking/7.svg",
    },
    {
      title: "Digital Banking Transformation",
      description:
        "We enable banks to embrace digital innovation with seamless integration of mobile banking, online platforms, and fintech solutions for enhanced customer experiences.",
      image: "/industrypics/Banking/digital-banking.jpg",
      icon: "/industrypics/Banking/2.svg",
    },
    {
      title: "Core Banking Solutions",
      description:
        "Streamline operations and improve efficiency with scalable and customizable core banking systems.",
      image: "/industrypics/Banking/Core.jpg",
      icon: "/industrypics/Banking/3.svg",
    },
    {
      title: "Risk and Compliance Management",
      description:
        "Stay ahead of regulatory changes with our tailored risk management and compliance solutions.",
      image: "/industrypics/Banking/Risk-Management.jpg",
      icon: "/industrypics/Banking/6.svg",
    },
    {
      title: "Customer Experience Enhancement",
      description:
        "Implement advanced tools, such as AI-powered chatbots and CRM platforms, to deliver personalized and efficient customer service.",
        image: "/industrypics/Banking/Customer-Experience.jpg",
        icon: "/industrypics/Banking/4.svg",
    },
    {
      title: "Data Analytics and Insights",
      description:
        "Leverage big data and predictive analytics to make informed decisions and drive business growth.",
        image: "/industrypics/Banking/Data-Analytic.jpg",
        icon: "/industrypics/Banking/5.svg",
    },
    {
      title: "Payments and Transaction Solutions",
      description:
        "Simplify payments with secure and reliable transaction processing systems tailored to the financial sector.",
        image: "/industrypics/Banking/Payments.jpg",
      icon: "/industrypics/Banking/1.svg",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-4">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col relative max-w-sm w-full mx-auto"
          >
            <div
              className="relative h-60 md:h-64 flex justify-center items-center"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-[-2rem] w-16 h-16 sm:w-20 sm:h-20 bg-[#2f48a5] rounded-full shadow-lg flex justify-center items-center">
                <img
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
            </div>

            {/* Lower Part */}
            <div className="p-6 pt-12 flex-1 flex flex-col justify-center items-center">
              <h3 className="text-center text-lg sm:text-xl font-semibold mb-4">
                {card.title}
              </h3>
              <p className="text-center text-gray-600 text-sm sm:text-base">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BankingFinance;
