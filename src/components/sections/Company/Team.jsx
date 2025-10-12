"use client";

import StrapiImage from "@/components/ui/StrapiImage";

const Team = ({ data }) => {
  if (!data) return null;

  const { title, description, image } = data;

  const paragraphs = description ? description.split("\n\n") : [];

  return (
    <section className="py-32 bg-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none text-center lg:text-left">
            <h2 className="font-manrope text-4xl sm:text-4xl font-bold leading-tight mb-7">
              {title}
            </h2>

            {paragraphs.map((para, i) => (
              <p key={i} className="text-base sm:text-lg text-gray-600 mb-6">
                {para}
              </p>
            ))}
          </div>

          {/* Images */}
          <div className="w-full lg:w-1/2 max-w-3xl">
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
              {image?.map((img, index) => (
                <StrapiImage
                  key={img.id || index}
                  src={img}
                  alt={img.name || `Team member ${index + 1}`}
                  width={176} // w-44
                  height={224} // h-56
                  className={`w-44 h-56 rounded-2xl object-cover mx-auto ${
                    index === 0 || index === 2 ? "md:mt-20" : ""
                  } ${index === 4 ? "md:-mt-20" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
