import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../../public/bgimages/bg13.jpg";
import image2 from "../../../public/bgimages/bg17.jpg";
import image3 from "../../../public/bgimages/bg15.jpg";

const CustomCarousel = () => {
  const slides = [
    {
      image: image1,
      text: "Cutting-Edge IT Solutions",
      description:
        "Delivering scalable and secure digital solutions to help businesses stay ahead in the technology-driven world.",
    },
    {
      image: image2,
      text: "Innovation Meets Reliability",
      description:
        "Our solutions are built with innovation at the core, ensuring reliable performance for enterprises of all sizes.",
    },
    {
      image: image3,
      text: "Your Trusted Technology Partner",
      description:
        "From cloud to AI, we provide end-to-end IT services that drive transformation and sustainable growth.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-4.5rem)] m-auto overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            fill
          />
          {/* Overlay div for opacity */}
          <div className="absolute inset-0 bg-black opacity-10 z-10"></div>{" "}
          {/* Adjust opacity here */}
          <AnimatePresence mode="wait">
            {index === currentIndex && (
              <motion.div
                key={slide.text}
                className="absolute inset-0 flex flex-col justify-center px-4 md:pl-[20vh] pt-[45vh] md:pt-0 z-20"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.0 }}
              >
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-2">
                  {slide.text}
                </h2>
                <p className="text-white text-md sm:text-lg md:text-lg max-w-xl mb-4">
                  {slide.description}
                </p>
                <Link href="/contact" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:outline-none font-medium rounded-3xl text-sm md:text-base px-5 py-2.5 cursor-pointer flex items-center gap-x-2"
                  >
                    Contact Us <FaArrowRight className="cursor-pointer" />
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute z-30 text-white top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full shadow-xl hover:bg-gray-300 hover:opacity-90 cursor-pointer"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-30 text-white top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full shadow-xl hover:bg-gray-300 hover:opacity-90 cursor-pointer"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CustomCarousel;