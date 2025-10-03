import Image from "next/image";
import mem1 from "../../../../public/team/mem1.jpg";
import mem2 from "../../../../public/team/mem2.jpg";
import mem3 from "../../../../public/team/mem3.jpg";
import mem4 from "../../../../public/team/mem4.jpg";
import mem5 from "../../../../public/team/mem5.jpg";
import mem6 from "../../../../public/team/mem6.jpg";

const Team = () => {
  const teamMembers = [
    { src: mem1, alt: "Team member 1" },
    { src: mem2, alt: "Team member 2" },
    { src: mem3, alt: "Team member 3" },
    { src: mem4, alt: "Team member 4" },
    { src: mem5, alt: "Team member 5" },
    { src: mem6, alt: "Team member 6" },
  ];

  return (
    <section className="py-32 bg-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none text-center lg:text-left">
            <h2 className="font-manrope text-4xl sm:text-4xl font-bold leading-tight mb-7">
              Our Story
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Cygnus came into being in 2000 with a mission to provide
              mission-critical IT solutions. We aimed to combine advanced
              technology with practical solutions to meet market demands and
              exceed consumer expectations. Our journey began with a vision of
              innovation and reliability in the IT sector.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-10">
              Our extensive experience in the industry has played a key role in
              establishing Cygnus as a trusted partner. With an unwavering
              commitment to excellence, we’ve built a reputation for
              dependability and delivering quality. Over the years, we’ve
              expanded our reach, partnering with several leading Original
              Equipment Manufacturers (OEMs) to offer cutting-edge IT solutions.
            </p>
          </div>

          {/* Images */}
          <div className="w-full lg:w-1/2 max-w-3xl">
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Image
                  key={index}
                  src={member.src}
                  alt={member.alt}
                  className={`w-44 h-56 rounded-2xl object-cover mx-auto ${
                    index === 0 || index === 2 ? "md:mt-20" : ""
                  } ${
                    index === 4 ? "md:-mt-20" : ""
                  }`}
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