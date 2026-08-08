"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#2563eb",
    "#1e40af", 
    "#172554",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #0284c7, #2563eb)", 
    "linear-gradient(to bottom right, #0369a1, #1d4ed8)", 
    "linear-gradient(to bottom right, #075985, #1e40af)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <>
      {/* Mobile: plain stacked cards, no sticky/scroll-spy behaviour */}
      <div className="flex flex-col gap-6 p-4 md:hidden">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className="overflow-hidden rounded-xl shadow-lg"
            style={{ background: linearGradients[index % linearGradients.length] }}
          >
            <div className="h-52 w-full overflow-hidden">{item.content ?? null}</div>
            <div className="p-5">
              <h2 className="text-2xl font-bold text-slate-100">{item.title}</h2>
              <p className="mt-3 text-base text-slate-200">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: original sticky-scroll experience */}
      <motion.div
        animate={{
          background: backgroundGradient,
        }}
        className="relative flex h-0 flex-col justify-center gap-10 overflow-hidden p-0 md:h-[45rem] md:flex-row md:gap-20 md:overflow-y-auto md:p-10 lg:gap-44"
        ref={ref}>
        <div className="relative flex items-start px-4 md:px-0">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-3xl font-bold text-slate-100 md:text-4xl">
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="mt-6 max-w-sm text-lg text-slate-300 md:mt-10 md:text-xl">
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "sticky top-20 hidden h-[25rem] w-full overflow-hidden rounded-xl bg-white md:block md:w-[30rem]",
            contentClassName
          )}>
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </>
  );
};