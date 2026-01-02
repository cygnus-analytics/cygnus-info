import dynamic from "next/dynamic";

const Silk = dynamic(() => import("../../ui/Silk"), { ssr: false });

const Banner = ({ data }) => {

  const { title, description } = data;

  return (
    <section className="relative h-[calc(100vh-4.5rem)] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Silk
          speed={12}
          scale={0.8}
          color="#3b82f6"
          noiseIntensity={1}
          rotation={0}
        />
      </div>

      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-20 text-center px-5 text-white">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight mx-auto max-w-3xl">
          {title}
        </h1>
        <p className="text-md sm:text-md md:text-lg lg:text-lg text-neutral-200 mx-auto max-w-4xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Banner;
