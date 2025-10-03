import PropTypes from "prop-types";
import { motion } from "framer-motion";
import img1 from "../../../../public/whatsets/ltr.jpg";
import img2 from "../../../../public/whatsets/rcs.jpg";
import img3 from "../../../../public/whatsets/pdm.jpg";
import img5 from "../../../../public/whatsets/bp.jpg";
import img6 from "../../../../public/bgimages/bg1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const GridItem = ({ title, description, image, className, index }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    custom={index}
    className={`
      relative cursor-pointer overflow-hidden rounded-md shadow-xl h-60 
      bg-cover bg-center flex flex-col justify-between p-4 
      transition-transform transform hover:scale-105 ease-in-out duration-300 
      group/card ${className || ""}
    `}
    style={{ backgroundImage: `url(${image})` }}
  >
    {/* Overlay */}
    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-40 z-0"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0"></div>

    {/* Content */}
    <div className="z-10 text-content mt-auto">
      <h2 className="font-bold text-xl md:text-2xl text-white relative">
        {title}
      </h2>
      <p className="font-normal text-md text-gray-200 relative mt-2">
        {description}
      </p>
    </div>
  </motion.div>
);

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  index: PropTypes.number,
};

const WhatSets = () => {
  const gridData = [
    {
      title: "Long-term Relationships",
      description:
        "We focus on building strong, lasting client connections based on trust, reliability, and shared success.",
      image: "whatsets/ltr.jpg",
    },
    {
      title: "Real Customer Support",
      description:
        "Genuine, responsive assistance that goes beyond expectations to serve your needs with care and clarity.",
      image: "whatsets/rcs.jpg",
    },
    {
      title: "Process-Driven Systems",
      description:
        "A streamlined, consistent approach to ensure every project is delivered efficiently and with precision.",
      image: "whatsets/pdm.jpg",
    },
    {
      title: "Tailored Solutions",
      description:
        "Custom-built strategies that adapt to your unique business goals, market, and operational challenges.",
      image: "bgimages/bg1.jpg",
    },
    {
      title: "Core Business Values",
      description:
        "We operate with integrity, innovation, and a strong focus on delivering meaningful, measurable results.",
      image: "whatsets/bp.jpg",
    },
  ];

  return (
    <section className="bg-blue-100 h-auto py-20">
      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-blue-800 mb-4 font-semibold text-2xl md:text-3xl lg:text-4xl pt-5"
      >
        What Sets Us Apart is What We Stand For
      </motion.h4>

      {/* Grid */}
      <div className="mt-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 px-6 md:px-10 max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          className="border-l-[22px] border-t-[22px] border-b-[22px] border-blue-900 p-6 rounded-lg min-h-[150px] transition-transform transform hover:scale-105 hover:opacity-90 ease-in-out duration-300"
        ></motion.div>

        {gridData.map((item, index) => (
          <GridItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            index={index + 1} // start delay from 1 because border box is 0
          />
        ))}
      </div>
    </section>
  );
};

export default WhatSets;
