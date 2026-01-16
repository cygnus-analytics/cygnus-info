"use client";

import StrapiImage from "../../ui/StrapiImage";
import { StickyScroll } from "../../ui/StickyScroll";

// New Component for Mobile View
const MobileCards = ({ cards }) => {
  return (
    <div className="px-4 py-10 ">
    <h1 className="text-2xl font-semibold mb-4 text-center">Print Solutions</h1>
    <p className="mb-12 text-center">Next-generation print infrastructure designed for enterprise security, cost efficiency, and digital workflow.</p>
    <div className="flex flex-col gap-8   md:hidden">
      {cards.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 overflow-hidden rounded-2xl bg-neutral-100 shadow-sm border border-neutral-100">
          <div className="relative aspect-video w-full">
            {item.image && (
              <StrapiImage
                src={item.image}
                alt={item.title || "Printer Solution Image"}
                className="h-full w-full object-cover"
                width={600}
                height={400}
              />
            )}
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-neutral-800 mb-1">
              {item.title}
            </h3>
            <p className="text-neutral-600 text-sm text-justify">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

const PrinterSolutions = ({ data }) => {
  if (!data || !data.Section) return null;

  const { Section } = data;
  const cards = Section.Card || [];

  // Prepare content for StickyScroll (Desktop)
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
    <section className="w-full">
      {/* Desktop View: Visible from 'md' (768px) and up */}
      <div className="hidden md:block">
        <StickyScroll content={content} />
      </div>

   <div className="md:hidden">
       {/* Mobile View: Visible only on screens smaller than 'md' */}
       <MobileCards cards={cards} />
   </div>
    </section>
  );
};

export default PrinterSolutions;