"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Banner from "../sections/Home/Banner";
import Principles from "../sections/Home/FirstPageProducts.jsx";
import IndustriesSlide from "../sections/Home/IndustriesSlide.jsx";
import img22 from "../../../public/logo/aws.png";
import img32 from "../../../public/logo/hp.png";
import img42 from "../../../public/logo/nvidia.png";
import img52 from "../../../public/logo/cisco.png";
import img62 from "../../../public/logo/hewlett.png";
import img72 from "../../../public/logo/ibm.png";
import img82 from "../../../public/logo/microsoft.png";
import img92 from "../../../public/logo/netapp.png";
import img102 from "../../../public/logo/xerox.png";
import img112 from "../../../public/logo/redhat.png";
import img113 from "../../../public/logo/Arcon_logo.png";
import { LogoBanner } from "../sections/Home/LogoBanner";
import WhatSets from "../sections/Home/WhatSets.jsx";
import FiveGrid from "../sections/Home/FiveGrid.jsx";
import CustomCarousel from "../ui/CustomCarousel";
import Companies from "../ui/Companies";
import { BentoGridDemo } from "../sections/Home/BentoGridDemo";
// import ImageWithScrollData from "../components/ImageWithScrollData.jsx";
import CtaSection from "../ui/CtaSection";
import VideoBanner from "../ui/VideoBanner";
const logoBannerImages = [
  "/logo/xerox.png",
  "/logo/aws.png",
  "/logo/hp.png",
  "/logo/nvidia.png",
  "/logo/cisco.png",
  "/logo/hewlett.png",
  "/logo/ibm.png",
  "/logo/microsoft.png",
  "/logo/netapp.png",
  "/logo/redhat.png",
  "/logo/Arcon_logo.png",
];

const Home = () => {
  return (
    <div>
      <CustomCarousel />
      <Companies />
      <BentoGridDemo />
      <VideoBanner/>
      {/* <Banner /> */}
      {/* <WhatSets /> */}
      <Principles />
      <IndustriesSlide />
      {/* <FiveGrid /> */}
      {/* <ImageWithScrollData/> */}
      <CtaSection/>
    </div>
  );
};

export default Home;
