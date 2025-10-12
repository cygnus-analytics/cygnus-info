"use client";

import StrapiImage from "../../ui/StrapiImage";
import { StickyScroll } from "../../ui/StickyScroll";

const PrinterSolutions = ({ data }) => {
  if (!data || !data.Section) return null;

  const { Section } = data;
  const cards = Section.Card || [];

  // Prepare content for StickyScroll
  const content = cards.map((item) => ({
    title: item.title,
    description: item.description?.trim(),
    content: (
      <div className="flex h-full w-full items-center justify-center">
        {item.image && (
          <StrapiImage
            src={item.image}
            alt={item.title || "Printer Solution Image"}
            className="h-full w-full object-cover rounded-xl"
            width={800}
            height={600}
          />
        )}
      </div>
    ),
  }));

  return (
    <section className=" bg-gray-50">
        <StickyScroll content={content} />
    </section>
  );
};

export default PrinterSolutions;
