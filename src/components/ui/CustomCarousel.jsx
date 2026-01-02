"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import StrapiImage from "../ui/StrapiImage";

const CustomCarousel = ({ data }) => {
  if (!data || !data.carousels || data.carousels.length === 0) return null;

  const slides = data.carousels.map((item) => ({
    image: item.image,
    heading: item.heading,
    subHeading: item.subHeading,
    ctaText: item.ctaText,
    ctaLink: item.ctaLink,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

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
          <StrapiImage
            src={slide.image}
            alt={slide.heading || `Slide ${index + 1}`}
            className="w-full h-full object-cover"
            fill
          />

          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

          <AnimatePresence mode="wait">
            {index === currentIndex && (
              <motion.div
                key={slide.heading}
                className="absolute inset-0 flex flex-col justify-center px-4 md:pl-[20vh] pt-[45vh] md:pt-0 z-20"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.0 }}
              >
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-2">
                  {slide.heading}
                </h1>
                <p className="text-white text-md sm:text-lg md:text-lg max-w-xl mb-4">
                  {slide.subHeading}
                </p>

                {slide.ctaText && (
                  <Link href={slide.ctaLink || "#"} passHref>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:outline-none font-medium rounded-3xl text-sm md:text-base px-5 py-2.5 cursor-pointer flex items-center gap-x-2"
                    >
                      {slide.ctaText} <FaArrowRight />
                    </motion.button>
                  </Link>
                )}
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
