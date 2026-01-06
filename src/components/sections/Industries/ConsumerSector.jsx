import { motion } from "framer-motion";

const textVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? 60 : -60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ConsumerSector = ({cards}) => {
  const cardData = [
    {
      title: "Customized IT Infrastructure",
      description:
        "Design and implement IT systems aligned with your business goals, providing scalability, reliability, and efficiency to meet dynamic consumer needs.",
      image: "/industrypics/ConsumerSector/1.jpg",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Safeguard your digital ecosystem with advanced cybersecurity measures that protect sensitive customer data and ensure compliance with industry standards.",
      image: "/industrypics/ConsumerSector/2.jpg",
    },
    {
      title: "Data Storage Solutions",
      description:
        "Offer robust storage systems to manage and secure large volumes of data, enabling seamless access and retrieval.",
      image: "/industrypics/ConsumerSector/3.jpg",
    },
    {
      title: "Cloud Services",
      description:
        "Facilitate digital transformation with flexible and scalable cloud solutions, providing the foundation for enhanced collaboration and operational efficiency.",
      image: "/industrypics/ConsumerSector/4.jpg",
    },
    {
      title: "Software as a Service (SaaS)",
      description:
        "Recommend and implement SaaS solutions tailored to specific business functions, helping improve productivity and streamline processes.",
      image: "/industrypics/ConsumerSector/5.jpg",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-14">
        {cards?.map((card, index) => {
          const isEven = index % 2 === 0;
          const textDirection = isEven ? "left" : "right";
          const imageDirection = isEven ? "right" : "left";

          return (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              {/* Text Content */}
              <motion.div
                className="w-full md:w-1/2"
                custom={textDirection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariants}
              >
                <h3 className="text-[#25272B] text-[20px] sm:text-[24px] font-poppins font-medium leading-[32px] tracking-[0.48px] mb-4 text-center md:text-left">
                  {card?.title}
                </h3>
                <p className="text-[rgba(37,39,43,0.60)] text-[16px] font-poppins leading-[24px] text-center md:text-left">
                  {card?.description}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                className="w-full md:w-1/2"
                custom={imageDirection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imageVariants}
              >
                <div
                  className="w-full h-[250px] sm:h-[320px] md:h-[360px] rounded-lg bg-gray-200"
                  style={{
                    backgroundImage: `url(${card?.image?.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ConsumerSector;
