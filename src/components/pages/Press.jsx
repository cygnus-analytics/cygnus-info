"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Press() {
  return (
    <div className="pt-8 sm:pt-12 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-12 mx-auto max-w-7xl">
      
      {/* Title Section */}
      <motion.h1
        className="text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight max-w-6xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Cygnus Information Solutions at India AI Impact Summit 2026
      </motion.h1>

      <motion.p
        className="text-start text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 mb-10 sm:mb-14 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Showcasing AI-powered cultural preservation through Gyanbharatam — 
        turning ancient manuscripts into living digital knowledge.
      </motion.p>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Image Section */}
        <motion.div
          className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[680px] rounded-lg overflow-hidden shadow-xl col-span-1 lg:col-span-5"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/gb3.png"
            alt="Gyanbharatam at India AI Impact Summit 2026"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Article */}
        <motion.article
          className="space-y-5 text-neutral-700 leading-relaxed text-sm sm:text-base md:text-lg col-span-1 lg:col-span-7 max-w-3xl lg:max-w-none"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm text-neutral-500">
            Published on February 16, 2026
          </p>

          <p>
            Cygnus Information Solutions is proud to announce its participation
            at the <strong>India AI Impact Summit 2026</strong>, held from
            <strong> 16–20 February 2026 </strong>
            at <strong>Bharat Mandapam, New Delhi</strong> (Hall 2 & Hall 14).
          </p>

          <p>
            At the summit, Cygnus is presenting <strong>Gyanbharatam</strong> —
            an AI-driven national digital knowledge initiative developed in
            collaboration with the Ministry of Culture, Government of India.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 pt-4">
            Turning Ancient Manuscripts into Living Digital Knowledge
          </h2>

          <p>
            Many historical texts remain inaccessible due to complex scripts and
            unstructured scanned formats. Gyanbharatam leverages specialised
            AI-based OCR trained for historical scripts such as old Devanagari,
            converting manuscripts into structured, searchable repositories.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 pt-4">
            Impact at Scale
          </h2>

          <p>
            The initiative reduces transcription errors, improves transliteration
            accuracy, and enables long-term digital preservation — strengthening
            India’s cultural knowledge infrastructure for future generations.
          </p>

          <p>
            Visitors can experience live demonstrations and explore how AI is
            reshaping digital heritage at national scale.
          </p>

        </motion.article>
      </div>
    </div>
  );
}
