"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({
  text
}) {
  const colors = [
  "rgb(224, 242, 254)", // very light blue
  "rgb(186, 230, 253)", // sky blue
  "rgb(125, 211, 252)", // soft blue
  "rgb(56, 189, 248)",  // cyan blue
  "rgb(14, 165, 233)",  // light azure
  "rgb(2, 132, 199)",   // medium blue
  "rgb(3, 105, 161)",   // deep ocean blue
  "rgb(30, 64, 175)",   // royal blue
  "rgb(29, 78, 216)",   // vivid indigo-blue
  "rgb(23, 37, 84)",    // dark navy blue
];


  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight">
      {char}
    </motion.span>
  ));
}
