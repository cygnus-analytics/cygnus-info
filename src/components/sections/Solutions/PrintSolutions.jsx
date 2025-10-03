import cygnus_logo from "../../assets/logo/cygnus.png";
import p from "../../assets/solutionpics/8.svg";
import s from "../../assets/solutionpics/9.svg";
import elp from "../../assets/solutionpics/10.svg";
import { motion } from "framer-motion";

const PrintSolutions = () => {
  const printerData = [
    {
      title: "Printers",
      description: "Reliable printing for small to large-scale needs.",
      image: p,
    },
    {
      title: "Scanners",
      description: "High-quality digitization for streamlined workflows.",
      image: s,
    },
    {
      title: "Enterprise-Level Printers",
      description: "Robust systems for high-volume operations.",
      image: elp,
    },
  ];

  return (
    <>
      <section className="bg-blue-100 py-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center text-2xl md:text-3xl lg:text-4xl text-blue-800 font-semibold px-6 text-center"
        >
          Print Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm md:text-base lg:text-lg text-blue-600 max-w-4xl mx-auto mb-12 mt-4"
        >
          Delivering seamless and reliable printing, scanning, and high-volume systems tailored for your business needs.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto h-full sm:mt-10 lg:mt-12 px-4 md:px-6">
          {/* First Column with Circle */}
          <div className="flex justify-center items-center lg:col-span-3">
            <div className="w-60 h-60 md:w-80 md:h-80 bg-white rounded-full flex justify-center items-center shadow-lg">
              <img
                src={cygnus_logo}
                alt="Cygnus Logo"
                className="w-32 h-32 md:w-44 md:h-44 object-contain"
              />
            </div>
          </div>

          {/* Middle Div with Arrows - Hidden on smaller screens */}
          <div className="hidden lg:flex flex-col justify-center items-center gap-8 col-span-4">
            {/* First SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="306"
              height="171"
              viewBox="0 0 306 171"
              fill="none"
            >
              <path
                d="M284.879 11.0396C284.879 16.5843 289.383 21.0792 294.939 21.0792C300.496 21.0792 305 16.5843 305 11.0396C305 5.4949 300.496 1 294.939 1C289.383 1 284.879 5.4949 284.879 11.0396ZM284.879 11.0396H113.847L16.594 151.594M21.1213 159.96C21.1213 165.505 16.617 170 11.0607 170C5.50433 170 1 165.505 1 159.96C1 154.416 5.50433 149.921 11.0607 149.921C16.617 149.921 21.1213 154.416 21.1213 159.96Z"
                stroke="#1C3182"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Second SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="305"
              height="12"
              viewBox="0 0 305 12"
              fill="none"
            >
              <path
                d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM293.667 6C293.667 8.94552 296.055 11.3333 299 11.3333C301.946 11.3333 304.333 8.94552 304.333 6C304.333 3.05448 301.946 0.666667 299 0.666667C296.055 0.666667 293.667 3.05448 293.667 6ZM6 6V7H299V6V5H6V6Z"
                fill="#1C3182"
              />
            </svg>

            {/* Third SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="306"
              height="165"
              viewBox="0 0 306 165"
              fill="none"
            >
              <path
                d="M284.88 154.317C284.88 148.969 289.384 144.634 294.94 144.634C300.496 144.634 305 148.969 305 154.317C305 159.665 300.496 164 294.94 164C289.384 164 284.88 159.665 284.88 154.317ZM284.88 154.317H113.858L16.6099 18.7525M21.1226 10.6832C21.1226 5.33532 16.6185 1 11.0625 1C5.50644 1 1.00236 5.33532 1.00236 10.6832C1.00236 16.031 5.50644 20.3663 11.0625 20.3663C16.6185 20.3663 21.1226 16.031 21.1226 10.6832ZM21.1202 10.6832C21.1202 5.33532 16.6162 1 11.0601 1C5.50408 1 1 5.33532 1 10.6832C1 16.031 5.50408 20.3663 11.0601 20.3663C16.6162 20.3663 21.1202 16.031 21.1202 10.6832Z"
                stroke="#1C3182"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          <div className="flex flex-col justify-center items-center rounded-lg col-span-5 gap-y-11 mt-10">
            {printerData.map((item, index) => (
              <div
                key={index}
                className="w-[534px] h-[152px] bg-[#FDFDFF] rounded-full flex justify-start items-center"
              >
                <div className="h-40 w-40 border-8 border-blue-200 rounded-full bg-gradient-to-b from-[#8EB9FF] to-[#3478E6] flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={`${item.title} Icon`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-[20px] font-semibold text-[#25272B] leading-[26px] font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-[16px] font-normal text-[#25272B] leading-[24px] font-poppins">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrintSolutions;