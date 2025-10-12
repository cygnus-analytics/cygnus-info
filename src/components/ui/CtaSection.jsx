"use client";
import Link from "next/link";

const CtaSection = ({ data }) => {
  if (!data) return null;

  const { title, description, ctaText, ctaLink } = data;

  return (
    <section className="">
      <div className="pb-12 px-4 mx-auto max-w-screen-xl sm:pb-20 lg:px-6">
      <div className="max-w-screen-md">
      <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            {title}
          </h2>

          <p className="mb-8 text-gray-600 sm:text-lg md:text-xl">
            {description}
          </p>

          {ctaText && ctaLink && (
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                href={ctaLink}
                className="hidden lg:block text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-3xl text-sm px-5 py-3 text-center"
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
