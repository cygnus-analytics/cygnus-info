"use client";
import Link from "next/link";

export default function Heads({ data }) {
  if (!data) return null;

  return (
    <section className="bg-blue-100 py-20 text-center">
      {/* Title */}
      <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black mb-4">
        {data.title}
      </h2>

      {/* Description */}
      <p className="text-neutral-600 leading-relaxed mb-10">
        {data.description}
      </p>

      {/* CTA Button */}
      <Link href={`/${data.ctaLink || "contact"}`}>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br shadow-lg font-medium rounded-3xl text-sm px-6 py-2.5">
          {data.ctaText}
        </button>
      </Link>
    </section>
  );
}
