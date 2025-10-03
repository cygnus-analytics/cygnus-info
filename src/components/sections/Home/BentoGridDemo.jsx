import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../../ui/BentoGrid";
import { Ripple } from "@/components/ui/Ripple";
import logo from "../../../../public/logo/cygnus.png";
import DotGrid from "../../ui/DotGrid";

const items = [
  {
    title: (
      <h2 className="text-2xl text-white font-bold font-sans drop-shadow-lg">
        Long-term Relationships
      </h2>
    ),
    description:(
      <p className="font-sans text-md font-normal text-gray-200 drop-shadow-md">
      We focus on building strong, lasting connections based on trust, reliability, and shared success.
      </p>
    ),
    header: (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bgimages/mov2.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
  {
    title: "Real Customer Support",
    description:
      "Genuine, responsive assistance that goes beyond expectations to serve your needs with care and clarity.",
    header: (
      <div className="w-full h-full bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-200 rounded-lg"></div>
    ),
  },
  {
    title: "Process-Driven Systems",
    description:
      "A streamlined, consistent approach to ensure every project is delivered efficiently and with precision.",
    header: (
      <div className="w-full h-full rounded-lg bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200"></div>
    ),
  },
  {
    header: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <Ripple />

        <Image
          src={logo}
          alt="Centered Logo"
          width={180}
          height={150}
          className="z-10 object-contain"
        />
      </div>
    ),
  },
  {
    title: (
      <h2 className="text-2xl text-white font-bold font-sans drop-shadow-lg">
        Tailored Solutions
      </h2>
    ),
    description: (
      <p className="font-sans text-md font-normal text-gray-200 drop-shadow-md">
        Custom-built strategies that adapt to your unique business goals,
        market, and operational challenges.
      </p>
    ),
    header: (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src="/bgimages/bg20.jpg"
          alt="Background"
          fill
          className="object-fill"
        />
      </div>
    ),
  },
  {
    title: "Core Business Values",
    description:
      "We operate with integrity, innovation, and a strong focus on delivering meaningful, measurable results.",
    header: (
      <div className="w-full h-full bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg"></div>
    ),
  },
];

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto pb-32">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={
            i === 0 || i === 1 || i === 2
              ? "col-span-2"
              : i === 3
              ? "col-span-3 row-span-2 border-0 hover:shadow-none"
              : "col-span-3"
          }
        />
      ))}
    </BentoGrid>
  );
}
