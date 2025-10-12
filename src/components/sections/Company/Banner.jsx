import Silk from "../../ui/Silk";

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
      <div className="relative z-20 text-center px-4 max-w-3xl text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-gray-200">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Banner;
