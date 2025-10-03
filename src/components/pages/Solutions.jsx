"use client";
import React from "react";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Infrastructure from "../sections/Solutions/Infrastructure";
import AudioVideoScreens from "../sections/Solutions/AudioVideoScreens";
import CyberSecurity from "../sections/Solutions/CyberSecurity";
import Storage from "../sections/Solutions/Storage";
import Network from "../sections/Solutions/Network";
import EndPointSolutions from "../sections/Solutions/EndPointSolutions";
import PrintSolutions2 from "../sections/Solutions/PrintSolutions2";
import CloudSolutions from "../sections/Solutions/CloudSolutions";
import AIML from "../sections/Solutions/AIML";
import AppleScroll from "../ui/AppleScroll";
import GetInTouch from "../sections/Solutions/GetInTouch";
import { GoogleGeminiEffect } from "../ui/GoogleGeminEffect";
import FiveGrid from "../sections/Home/FiveGrid";
import CloudSolutionsNew from "../sections/Solutions/CloudSolutionsNew";
import AIMLNew from "../sections/Solutions/AIMLNew"

export default function Solutions() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <>
      <div
        className="h-[200vh] bg-white w-full relative pt-40 overflow-clip bg-gradient-to-t from-white to-blue-100 "
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>

      {/* All Solutions Sections */}
      <Infrastructure />
      <CyberSecurity />
      <Storage />
      <Network />
      <EndPointSolutions />
      {/* <AudioVideoScreens /> */}
      {/* <PrintSolutions /> */}
      <PrintSolutions2/>
      <AppleScroll/>
      {/* <HighPerformanceComputing /> */}
      {/* <FiveGrid/> */}
      <CloudSolutionsNew/>
      <AIMLNew/>
      {/* <CloudSolutions /> */}
      {/* <AIML /> */}
      <GetInTouch />
    </>
  );
}