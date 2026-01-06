"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import StrapiImage from "../ui/StrapiImage";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    {card.image ? (
      <StrapiImage
        src={card.image}
        alt={card.title}
        className="object-cover absolute inset-0"
        fill
      />
    ) : (
      <img loading="lazy"
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0"
      />
    )}

    <div
      className={cn(
        "absolute inset-0 bg-black/40 flex items-start justify-start py-6 px-4 transition-opacity duration-300 flex-col",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
      <div className="mt-3 text-gray-200">{card.description}</div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
