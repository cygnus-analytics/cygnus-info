import collage from "../../assets/collage.png";

const Story = () => {
  return (
    <div>
      <section className="py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6">
          {/* Image */}
          <div>
            <img
              src={collage}
              alt="Collage"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-6 sm:mb-8">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
              Cygnus came into being in 2000 with a mission to provide
              mission-critical IT solutions. We aimed to combine advanced
              technology with practical solutions to meet market demands and
              exceed consumer expectations. Our journey began with a vision of
              innovation and reliability in the IT sector.
            </p>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Our extensive experience in the industry has played a key role in
              establishing Cygnus as a trusted partner. With an unwavering
              commitment to excellence, we’ve built a reputation for
              dependability and delivering quality. Over the years, we’ve
              expanded our reach, partnering with several leading Original
              Equipment Manufacturers (OEMs) to offer cutting-edge IT solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
