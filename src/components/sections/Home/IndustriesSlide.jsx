"use client";
import React from "react";
import { Carousel, Card } from "../../ui/AppleCardCarousel";
import { useRouter } from "next/navigation";
import Image from "next/image"; 
import BankingBanner from "../../../../public/industrypics/Banking/banner.jpg";
import OilAndGasBanner from "../../../../public/industrypics/Oil/banner.jpg";
import EducationBanner from "../../../../public/industrypics/Education/classic-american-school-2025-02-11-21-11-14-utc-2.jpg";
import ManufacturingBanner from "../../../../public/industrypics/Manufacturing/industrial-worker-inspecting-and-check-up-machine-2025-03-14-13-22-31-utc.jpg";
import ConsumerSectorBanner from "../../../../public/industrypics/ConsumerSector/banner.jpg";
import SmallMediumBusinessBanner from "../../../../public/industrypics/Smb/banner.jpg";

const createSlug = (name) => {
  return name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

const industrySlideData = [
  {
    id: 1,
    heading: "Banking & Finance",
    slug: createSlug("Banking & Finance"),
    image: BankingBanner,
    description: "Innovative solutions for secure financial growth",
  },
  {
    id: 2,
    heading: "Oil & Gas",
    slug: createSlug("Oil & Gas"),
    image: OilAndGasBanner,
    description: "Driving energy innovation and global supply",
  },
  {
    id: 3,
    heading: "Education",
    slug: createSlug("Education"),
    image: EducationBanner,
    description: "Empowering learning with modern technology",
  },
  {
    id: 4,
    heading: "Manufacturing",
    slug: createSlug("Manufacturing"),
    image: ManufacturingBanner,
    description: "Streamlined production through smart automation",
  },
  {
    id: 5,
    heading: "Consumer Sector",
    slug: createSlug("Consumer Sector"),
    image: ConsumerSectorBanner,
    description: "Enhancing lifestyles with innovative products",
  },
  {
    id: 6,
    heading: "Small & Medium Business",
    slug: createSlug("Small & Medium Business"),
    image: SmallMediumBusinessBanner,
    description: "Tailored solutions for growing enterprises",
  },
];


export function IndustriesCarousel() {
  const router = useRouter(); 

  const handleSlideClick = (slug) => {
    router.push(`/industries/${slug}`);
  };

  const cards = industrySlideData.map((card, index) => (
    <div key={card.id} onClick={() => handleSlideClick(card.slug)} className="cursor-pointer">
      <Card
        key={card.image.src}
        card={{
          category: card.heading,
          title: card.description,
          src: card.image,
        }}
        index={index}
      />
    </div>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-7xl pl-4 mx-auto">
        Industries We Serve
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export default IndustriesCarousel;