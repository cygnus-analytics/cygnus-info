import React from "react";

const DiagonalDiv = ({ image, title, description, invert = false }) => {
  return (
    <div
      className={`h-[40rem] flex flex-col md:flex-row items-center  ${
        invert ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 h-full w-full bg-linear-to-b from-blue-300 to-blue-500">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="md:w-1/2 w-full h-full bg-white">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default DiagonalDiv;
