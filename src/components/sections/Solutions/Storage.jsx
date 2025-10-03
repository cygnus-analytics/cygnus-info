import san from "../../../../public/solutionpics/5.svg";
import ss from "../../../../public/solutionpics/6.svg";
import els from "../../../../public/solutionpics/7.svg";
import st1 from "../../../../public/solutionpics/storage1.jpg";
import st2 from "../../../../public/solutionpics/storage2.jpg";
import st3 from "../../../../public/solutionpics/storage3.jpg";
import CardSwap, { Card } from "../../ui/CardSwap/CardSwap";
import Squares from "../../ui/Squares";

const Storage = () => {
  const storageData = [
    {
      title: "SAN/NAS Storages",
      description:
        "High-performance storage area and network-attached solutions.",
      image: "/solutionpics/5.svg",
      fullImage: "/solutionpics/storage1.jpg",
    },
    {
      title: "Smart Storages",
      description: "Intelligent systems for dynamic data needs.",
      image: "/solutionpics/6.svg",
      fullImage: "/solutionpics/storage3.jpg",
    },
    {
      title: "Enterprise-Level Storage",
      description: "Secure, scalable storage for mission-critical operations.",
      image: "/solutionpics/7.svg",
      fullImage: "/solutionpics/storage2.jpg",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.2}
          squareSize={50}
          direction="diagonal"
          borderColor="#e3e1f4" 
          hoverFillColor="#2f48a5"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mx-auto max-w-6xl md:flex-row">
        {/* Text Side */}
        <div className="w-full flex flex-col justify-center px-4 md:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black text-center md:text-left">
            Storage
          </h2>
          <p className="sm:text-base md:text-lg lg:text-lg text-gray-600 text-center md:text-left">
            Explore high-performance, scalable, and intelligent storage
            options tailored to your business needs.
          </p>
        </div>

        {/* Cards Side */}
        <div className="w-full mt-8 sm:mt-0 md:mt-0 md:w-1/2 h-[350px] md:h-[600px] relative">
          <CardSwap
            cardDistance={60}
            verticalDistance={90}
            delay={3000}
            pauseOnHover={true}
          >
            {storageData.map((item, index) => (
              <Card
                key={index}
                className="p-2 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-white border border-gray-200"
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-8 mb-1"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {item.description}
                </p>
                <hr className="border-t-2 w-full border-gray-700 mb-2" />
                <img
                  src={item.fullImage}
                  alt={`${item.title} solution`}
                  className="w-full h-[19rem] rounded-md"
                  loading="lazy"
                />
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Storage;
