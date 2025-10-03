"use client";
import { motion } from "framer-motion";
import { FocusCards } from "../../ui/FocusCards";

const AIMLNew = () => {
  const cards = [
    {
      title: "Innovation",
      description:"Turn ideas into impact with our AI/ML Innovation services. From POCs to production-ready solutions, we build AI applications like recommendation engines, NLP, and computer vision—driving faster innovation and competitive advantage.",
      src: "/solutionpics/ai1.jpg",
    },
    {
      title: "Process Automation",
      description:"Boost efficiency with AI-powered automation. We combine RPA, ML, and cognitive services to streamline tasks in finance, HR, supply chain, and customer service—reducing errors and freeing teams for higher-value work.",
      src: "/solutionpics/ai2.jpg",
    },
    {
      title: "Insight Generation",
      description:"Transform data into decisions with AI-driven insights. Our advanced analytics platforms deliver predictive models, anomaly detection, and real-time dashboards to optimize forecasting, risk management, and customer engagement.",
      src: "/solutionpics/ai3.jpg",
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          AI/ML
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-gray-600 text-center font-poppins text-lg md:text-lg max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Leverage artificial intelligence and machine learning to unlock
          insights, automate processes, and drive innovation.
        </motion.p>

        <FocusCards cards={cards} />
      </div>
    </section>
  );
};

export default AIMLNew;
