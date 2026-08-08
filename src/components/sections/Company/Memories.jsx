import Image from "next/image";
import mem1 from "../../../../public/team/mem1.jpg"
import mem2 from "../../../../public/team/mem2.jpg"
import mem3 from "../../../../public/team/mem3.jpg"
import mem4 from "../../../../public/team/mem4.jpg"
import mem5 from "../../../../public/team/mem5.jpg"
import mem6 from "../../../../public/team/mem6.jpg"
import mem7 from "../../../../public/team/mem7.jpg"

const casepics = [
    { src: mem1, alt: "Cygnus team moment 1" },
    { src: mem2, alt: "Cygnus team moment 2" },
    { src: mem3, alt: "Cygnus team moment 3" },
    { src: mem4, alt: "Cygnus team moment 4" },
    { src: mem5, alt: "Cygnus team moment 5" },
    { src: mem6, alt: "Cygnus team moment 6" },
    { src: mem7, alt: "Cygnus team moment 7" },
  ];

const Memories = () => {
  return (
    <div className="relative overflow-hidden py-24 ">
      <div className="flex animate-marquee space-x-8 md:space-x-12 lg:space-x-16">
        {casepics.concat(casepics).map((photo, index) => (
          <div
            key={index}
            className={`relative shrink-0 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ${
              index % 2 === 0 ? "translate-y-12" : "-translate-y-4"
            } h-40 w-60 md:h-48 md:w-72 lg:h-56 lg:w-80`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 288px, 320px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memories;
