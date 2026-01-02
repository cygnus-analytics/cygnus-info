"use client";
import React from "react";
import Link from "next/link";

const CTASection = ({
  heading,
  buttonText,
  href,
  onClick,
  bgImage,
  maxWidth = "max-w-6xl",
 description,
}) => {
  const button = (
    <button
      onClick={onClick}
      className="cursor-pointer px-3 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-3 lg:py-3 text-white bg-blue-900 hover:bg-blue-700 rounded-3xl font-medium transition-all duration-200 shadow-md text-sm sm:text-sm md:text-md lg:text-lg"
    >
      {buttonText}
    </button>
  );

  return (
    <section className="px-4 sm:px-6 md:px-0 lg:px-0 mb-20 mt-10">
      <div
        className={`relative text-white py-12 sm:py-12 md:py-14 lg:py-16 px-3 sm:px-3 md:px-5 lg:px-6 flex flex-col items-center justify-center text-center rounded-3xl shadow-lg mx-auto ${maxWidth}`}
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl mb-3 sm:mb-3 md:mb-4 lg:mb-5">
          {heading}
        </h2>

        <h4 className="text-md sm:text-md md:text-lg lg:text-lg mb-6 sm:mb-6 md:mb-8 lg:mb-12">{description}</h4>

        {href ? <Link href={href}>{button}</Link> : button}
      </div>
    </section>
  );
};

export default CTASection;
