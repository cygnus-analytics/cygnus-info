"use client";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import BlurText from "../../ui/BlurText";

const Banner = () => {
  return (
    <div className="min-h-screen flex pt-32 justify-center mb-20 px-4">
      <div className="text-center w-full max-w-7xl">
        <div className="mb-8">
          <BlurText
            text="One Platform for Your Firm"
            animateBy="words"
            direction="top"
            delay={100}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          />
          <BlurText
            text="One Approach to IT Excellence"
            animateBy="words"
            direction="top"
            delay={200}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          />
        </div>

        {/* Animated Subtext */}
        <BlurText
          text="At Cygnus, we manage your backend IT infrastructure, encompassing data storage, connectivity and security allowing you to focus on growth."
          animateBy="words"
          direction="top"
          delay={50}
          className="text-base sm:text-lg mb-8 text-gray-600 px-4 md:px-20"
        />

        {/* Animated Button Text */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 ../../../../public:focus:ring-blue-800 shadow-lg shadow-blue-500/50 ../../../../public:shadow-lg ../../../../public:shadow-blue-800/80 font-bold rounded-3xl text-md px-6 py-3 text-center"
        >
          <BlurText
            text="Let's Talk Now"
            animateBy="words"
            direction="top"
            delay={100}
            className="inline"
          />
          <BsArrowRight />
        </Link>

        {/* Info Columns */}
        <div className="mt-10 bg-blue-800 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl p-8">
          {/* Column 1 */}
          <div className="bg-white p-4 rounded-lg">
            <video
              src="/ai3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-28 mx-auto mb-4 object-contain"
            />
            <h2 className="text-lg mb-4 font-semibold">
              Transforming Through Technology
            </h2>
            <p className="text-md text-gray-600">
              Unlock the potential of advanced technological solutions to
              transform and elevate your enterprise to new heights. Unlock the
              potential of advanced technological solutions to transform and
              elevate your enterprise to new heights.
            </p>
          </div>

          {/* Column 2 */}
          <div className="bg-white p-4 rounded-lg">
            <video
              src="/ai2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-28 mx-auto mb-4 object-contain"
            />
            <h2 className="text-lg mb-4 font-semibold">
              The Complete IT Solution
            </h2>
            <p className="text-md text-gray-600">
              Revolutionary products and services tailored to your unique needs,
              delivering unparalleled performance and innovation. Revolutionary
              products and services tailored to your unique needs, delivering
              unparalleled performance and innovation.
            </p>
          </div>

          {/* Column 3 */}
          <div className="bg-white p-4 rounded-lg">
            <video
              src="/ai1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-28 mx-auto mb-4 object-contain"
            />
            <h2 className="text-lg mb-4 font-semibold">
              Business-Driven Performance
            </h2>
            <p className="text-md text-gray-600">
              Elevate your performance with cutting-edge, reliable, and secure
              solutions that drive efficiency and innovation at every step.
              Elevate your performance with cutting-edge, reliable, and secure
              solutions that drive efficiency and innovation at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
