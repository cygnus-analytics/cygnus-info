import { motion } from "framer-motion";
import smb1 from "../../../../public/industrypics/Smb/smb-1.jpg";
import smb2 from "../../../../public/industrypics/Smb/smb-2.jpg";
import smb3 from "../../../../public/industrypics/Smb/smb-3.jpg";
import smb4 from "../../../../public/industrypics/Smb/smb-4.jpg";
import smb5 from "../../../../public/industrypics/Smb/smb-5.jpg";
import smb6 from "../../../../public/industrypics/Smb/smb-6.jpg";
import smb7 from "../../../../public/industrypics/Smb/smb-7.jpg";

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
    scale: 0.9,
    x: direction === "left" ? 60 : -60,
  }),
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SmallMediumBusiness = () => {
  const cardData = [
    {
      title: "IT Infrastructure Solutions",
      description:
        "Design and deploy IT infrastructure that scales with your business, ensuring reliability and performance at every stage.",
      image: "/industrypics/Smb/smb-1.jpg",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Protect your business from cyber threats with comprehensive security measures, including endpoint protection, firewalls, and secure authentication systems.",
      image: "/industrypics/Smb/smb-2.jpg",
    },
    {
      title: "Data Storage Solutions",
      description:
        "Provide robust and scalable storage options to manage business-critical data efficiently and securely.",
      image: "/industrypics/Smb/smb-3.jpg",
    },
    {
      title: "Cloud Services",
      description:
        "Enable seamless collaboration and flexibility with cloud-based solutions that support your operational needs.",
      image: "/industrypics/Smb/smb-4.jpg",
    },
    {
      title: "Software Licensing",
      description:
        "Manage and provide licenses for essential software applications, ensuring compliance and optimal performance.",
      image: "/industrypics/Smb/smb-5.jpg",
    },
    {
      title: "Zero Trust Network Access",
      description:
        "Implement ZTNA frameworks for secure remote access, reducing vulnerabilities and enhancing data protection.",
      image: "/industrypics/Smb/smb-6.jpg",
    },
    {
      title: "In-Line Network Security",
      description:
        "Deploy advanced in-line security devices to monitor and secure network traffic at Layer 3, ensuring a robust defense against cyber threats.",
      image: "/industrypics/Smb/smb-7.jpg",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-10">
        {cardData.map((card, index) => {
          const isEven = index % 2 === 0;
          const textDirection = isEven ? "right" : "left";
          const imageDirection = isEven ? "left" : "right";

          return (
            <div
              key={index}
              className={`
                lg:bg-blue-100 md:bg-blue-100 sm:bg-white
                w-full md:w-[48rem]  
                h-auto md:h-[15rem] 
                mt-12 
                rounded-full
                flex flex-col md:${isEven ? "flex-row" : "flex-row-reverse"} 
                items-center mx-auto
                p-6 md:p-0
              `}
            >
              <motion.div
                className="h-[12rem] w-[12rem] md:h-[15rem] md:w-[15rem] border-8 border-white rounded-full flex-shrink-0"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                custom={imageDirection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imageVariants}
              ></motion.div>

              {/* Text Content */}
              <motion.div
                className="flex flex-col items-center text-center px-4 md:px-6 mt-6 md:mt-0"
                custom={textDirection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariants}
              >
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#25272B] font-poppins">
                  {card.title}
                </h3>
                <p className="text-[14px] md:text-[16px] font-normal text-[rgba(37,39,43,0.60)] leading-[22px] md:leading-[24px] font-poppins mt-4 max-w-md">
                  {card.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SmallMediumBusiness;
