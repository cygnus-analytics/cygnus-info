"use client";
import Link from "next/link";

const DEFAULT_DATA = {
  title: "Empower Your Business with Cygnus",
  description:
    "At Cygnus we help organizations stay ahead with innovative solutions in cloud computing, AI/ML, cybersecurity, networking, and infrastructure. Our mission is to transform businesses into agile, secure, and future-ready enterprises.",
  ctaText: "Get Started",
  ctaLink: "/solutions",
};

const CtaSection = ({ data }) => {
  // ✅ fallback to static if backend not available
  const finalData = data || DEFAULT_DATA;

  const { title, description, ctaText, ctaLink } = finalData;

  return (
    <section>
      <div className="pb-12 px-4 sm:px-4 md:px-6 mx-auto max-w-7xl sm:pb-20 lg:px-6">
        <div className="max-w-screen-md">
          
          {/* Title */}
          {title && (
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="mb-8 text-gray-600 sm:text-lg md:text-xl">
              {description}
            </p>
          )}

          {/* CTA Button */}
          {ctaText && ctaLink && (
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                href={ctaLink}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-3xl text-sm px-5 py-3 text-center"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;