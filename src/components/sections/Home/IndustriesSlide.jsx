"use client";
import React from "react";
import { Carousel, Card } from "../../ui/AppleCardCarousel";
import { useRouter } from "next/navigation";
export function IndustriesCarousel({ data }) {
  const router = useRouter();

  if (!data?.Industries || data.Industries.length === 0) return null;

  const handleSlideClick = (slug) => {
    router.push(`/industries/${slug}`);
  };

  const cards = data.Industries.map((industry, index) => (
    <div
      key={industry.id}
      onClick={() => handleSlideClick(industry.slug)}
      className="cursor-pointer"
    >
      <Card
        key={industry.id}
        card={{
          category: industry.title,
          title: industry.description,
          src: industry.image?.url || "/placeholder.jpg",
        }}
        index={index}
      />
    </div>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-7xl pl-4 mx-auto">
        {data.title || "Industries We Serve"}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export default IndustriesCarousel;
