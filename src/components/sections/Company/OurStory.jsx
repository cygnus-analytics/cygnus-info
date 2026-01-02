import React from "react";
import StrapiImage from "@/components/ui/StrapiImage";

const storyData = {
  title: "Our Story",
  description:
    "This is the beginning of our grand story. We started with a simple idea: to make a difference. Over the years, that simple idea has blossomed into a thriving community and a successful enterprise dedicated to innovation and excellence. We believe in building more than just products; we build relationships.\n\n" +
    "Our core values drive every decision we make. Integrity, passion, and relentless pursuit of quality are the pillars upon which our company stands. We’ve faced challenges, celebrated victories, and through it all, our commitment to our users and our mission has never wavered. We are constantly evolving to meet the needs of a dynamic world, ensuring our impact is positive and lasting. Join us as we continue to write the next chapter.",
  image: [
    { id: 1, url: "/image-1.jpg", name: "Team working together" },
    { id: 2, url: "/image-2.jpg", name: "Modern office interior" },
    { id: 3, url: "/image-3.jpg", name: "Successful meeting" },
    { id: 4, url: "/image-4.jpg", name: "Product showcase" },
    { id: 5, url: "/image-5.jpg", name: "Collaborative session" },
  ],
};

const OurStory = ({ data }) => {
  if (!data) return null;

  const { title, description, image } = data;

  const paragraphs = description ? description.split("\n\n") : [];

  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-4 md:px-4 lg:px-5">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 text-center">
            <h2 className="text-start text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold mb-4 text-neutral-900">
              {title}
            </h2>

            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-neutral-600 mb-6 text-justify"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-12 grid-rows-6 gap-4 lg:gap-6 h-[400px] md:h-[500px]">
              <div className="col-span-6 row-span-4 overflow-hidden rounded-xl shadow-lg">
                <StrapiImage
                  src={image?.[0]?.url}
                  alt={image?.[0]?.name}
                  width={600}
                  height={900}
                  className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-105"
                />
              </div>

              <div className="col-span-6 row-span-3 overflow-hidden rounded-xl shadow-lg">
                <StrapiImage
                  src={image?.[1]?.url}
                  alt={image?.[1]?.name}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-105"
                />
              </div>

              <div className="col-span-6 row-span-4 overflow-hidden rounded-xl shadow-lg">
                <StrapiImage
                  src={image?.[2]?.url}
                  alt={image?.[2]?.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-105"
                />
              </div>

              <div className="col-span-6 row-span-3 overflow-hidden rounded-xl shadow-lg">
                <StrapiImage
                  src={image?.[3]?.url}
                  alt={image?.[3]?.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
