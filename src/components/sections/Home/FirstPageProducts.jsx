"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../../lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const PrincipleCard = ({ image, title, description, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="flex flex-col h-full shadow-lg" 
    whileHover={{ scale: 1.02 }}
  >
    {/* Image */}
    <motion.div
      className="w-full overflow-hidden shadow-md bg-gray-50"
    >
      <Image
        src={`/${image}`}
        alt={title}
        width={600}
        height={400}
        className="w-full h-[20rem] object-cover rounded-t-lg"
      />
    </motion.div>

    <div className="flex flex-col flex-grow px-4 py-8 bg-gradient-to-r from-neutral-100 to-neutral-200 rounded-b-lg">
      <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-3">
        {title}
      </h3>
      <p className="text-md leading-relaxed flex-grow text-gray-600">
        {description}
      </p>
    </div>
  </motion.div>
);

const Products = () => {
  const productData = [
    {
      image: "itserve/infra3.jpg",
      title: "Infrastructure",
      description:
        "Transform your business units into high-performance ones with Cygnus’ reliable, efficient, optimized, and secured technology solutions.",
    },
    {
      image: "itserve/security2.jpg",
      title: "Security",
      description:
        "Protect your IT infrastructure and data from all types of cyber threats with the help of Cygnus’ robust cyber-security solutions.",
    },
    {
      image: "itserve/cloud.jpg",
      title: "Cloud",
      description:
        "Set up your virtual office and access your data anywhere, anytime with the help of our cloud computing solutions.",
    },
    {
      image: "itserve/ai4.jpg",
      title: "AI/ML",
      description:
        "Increase productivity and operational efficiency with Cygnus’ AI and ML solutions that help companies automate and optimize routine processes and tasks.",
    },
    {
      image: "itserve/network.jpg",
      title: "Networking",
      description:
        "We operate with integrity, innovation, and a commitment to achieving impactful results for our clients.",
    },
    {
      image: "itserve/data.jpg",
      title: "Data Center Solutions",
      description:
        "Focused on delivering tangible and quantifiable outcomes that enhance value and profitability for our clients.",
    },
    {
      image: "itserve/fms.jpg",
      title: "Facility Management Services",
      description:
        "Focused on delivering tangible and quantifiable outcomes that enhance value and profitability for our clients.",
    },
  ];

  return (
    <section className="pt-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Products and Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg md:text-lg text-gray-600 mb-12 max-w-4xl mx-auto text-center"
        >
          We provide a comprehensive range of IT services, including software
          development, system integration, IT consulting, and support — tailored
          to meet the unique needs of businesses and drive digital transformation.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-10">
          {productData.map((item, index) => {
            const isLastCentered =
              index === productData.length - 1 && productData.length % 3 !== 0;

            return (
              <div
                key={index}
                className={cn(
                  "flex",
                  isLastCentered
                    ? "col-span-1 sm:col-span-2 md:col-span-1 md:col-start-2 justify-center"
                    : ""
                )}
              >
                <PrincipleCard
                  index={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
