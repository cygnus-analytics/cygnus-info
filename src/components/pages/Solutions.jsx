"use client"
import React from "react";
import Infrastructure from "../sections/Solutions/Infrastructure";
// import AudioVideoScreens from "../sections/Solutions/AudioVideoScreens";
import CyberSecurity from "../sections/Solutions/CyberSecurity";
import Storage from "../sections/Solutions/Storage";
import Network from "../sections/Solutions/Network";
import EndPointSolutions from "../sections/Solutions/EndPointSolutions";
import PrintSolutions2 from "../sections/Solutions/PrintSolutions2";
import CloudSolutionsNew from "../sections/Solutions/CloudSolutionsNew";
import AIMLNew from "../sections/Solutions/AIMLNew";
import AppleScroll from "../ui/AppleScroll";
import GetInTouch from "../sections/Solutions/GetInTouch";
import ScrollHeroSection from "../sections/Solutions/ScrollHeroSection";

const Solutions = ({ solutionsData }) => {

  if (!solutionsData) return null;
  return (
    <>
      <ScrollHeroSection />
      <Infrastructure data={solutionsData?.Infrastructure}/>
      <CyberSecurity data={solutionsData?.CyberSecurity}/>
      <Storage data={solutionsData?.Storage} />
      <Network data={solutionsData?.Network} />
      <EndPointSolutions data={solutionsData?.EndPoint} />
      <PrintSolutions2 data={solutionsData?.Printer} />
      <AppleScroll data={solutionsData?.Hpc} />
      <CloudSolutionsNew data={solutionsData?.Cloud} />
      <AIMLNew data={solutionsData?.Aiml} />
      <GetInTouch data={solutionsData?.Cta} />
    </>
  );
}

export default Solutions;
