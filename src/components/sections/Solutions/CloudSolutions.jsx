import cld1 from "../../../../public/solutionpics/cloud1.jpg"
import cld2 from "../../../../public/solutionpics/cloud2.jpg"
import cld3 from "../../../../public/solutionpics/cloud3.jpeg"
import { motion } from "framer-motion";

const CloudSolutions = () => {
  return (
    <>
      <section className=" py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center text-2xl md:text-3xl lg:text-4xl text-black font-semibold"
        >
          Cloud Solutions
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm md:text-base lg:text-lg text-black max-w-4xl mx-auto mb-12 mt-2"
        >
          Transform your business with flexible and secure cloud computing architectures designed for modern demands.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3  gap-20 mx-auto max-w-7xl mt-10">
          {/* First Div */}
          <div className="grid h-[30rem] p-6 relative">
            {/* Image instead of Circle SVG */}
            <img
                src="solutionpics/cloud1.jpg"
                alt="Hybrid Cloud"
                className="absolute w-[200px] h-[200px] -bottom-[58px] justify-self-center rounded-full object-cover"
                loading="lazy"
            />
            {/* Vertical Line SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="206"
              viewBox="0 0 12 206"
              fill="none"
              className="absolute top-[132px] justify-self-center"
            >
              <path
                d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM6 6H5V206H6H7V6H6Z"
                fill="#1C3182"
              />
            </svg>
            {/* Content */}
            <div className="flex flex-col items-center text-center z-10">
            <h3 className="text-lg md:text-xl lg:text-[24px] font-semibold text-[#25272B] leading-7 md:leading-8 lg:leading-[32px] font-poppins mb-4">
            Hybrid Cloud
              </h3>
              <p className="text-sm md:text-base lg:text-[18px] font-normal text-[#25272B] leading-5 md:leading-6 lg:leading-[24px] font-poppins">
              Flexible integration of on-premises and cloud environments.
              </p>
            </div>
          </div>

          {/* Second Div */}
          <div className="p-6 flex flex-col h-[35rem] items-center text-center relative justify-end">
            {/* Image instead of Circle SVG */}
            <img
                src="solutionpics/cloud2.jpg"
                alt="Public Cloud"
                className="absolute w-[200px] h-[200px] top-[20px] rounded-full object-cover"
                loading="lazy"
            />
            {/* Vertical Line SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="206"
              viewBox="0 0 12 206"
              fill="none"
              className="absolute bottom-[135px]"
            >
              <path
                d="M0.666667 200C0.666667 202.946 3.05448 205.333 6 205.333C8.94552 205.333 11.3333 202.946 11.3333 200C11.3333 197.054 8.94552 194.667 6 194.667C3.05448 194.667 0.666667 197.054 0.666667 200ZM6 0H5V200H6H7V0H6Z"
                fill="#1C3182"
              />
            </svg>
            {/* Content */}
            <div>
            <h3 className="text-lg md:text-xl lg:text-[24px] font-semibold text-[#25272B] leading-7 md:leading-8 lg:leading-[32px] font-poppins mb-4">
            Public Cloud
              </h3>
              <p className="text-sm md:text-base lg:text-[18px] font-normal text-[#25272B] leading-5 md:leading-6 lg:leading-[24px] font-poppins">
              Cost-effective, scalable cloud services (AWS, Azure, Google).
              </p>
            </div>
          </div>

          {/* First Div */}
          <div className="grid h-[30rem] p-6 relative">
            {/* Image instead of Circle SVG */}
            <img
                src="solutionpics/cloud3.jpeg"
                alt="Private Cloud"
                className="absolute w-[200px] h-[200px] -bottom-[58px] justify-self-center rounded-full object-cover"
                loading="lazy"
            />
            {/* Vertical Line SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="206"
              viewBox="0 0 12 206"
              fill="none"
              className="absolute top-[132px] justify-self-center"
            >
              <path
                d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM6 6H5V206H6H7V6H6Z"
                fill="#1C3182"
              />
            </svg>
            {/* Content */}
            <div className="flex flex-col items-center text-center z-10">
            <h3 className="text-lg md:text-xl lg:text-[24px] font-semibold text-[#25272B] leading-7 md:leading-8 lg:leading-[32px] font-poppins mb-4">
            Private Cloud{" "}
              </h3>
              <p className="text-sm md:text-base lg:text-[18px] font-normal text-[#25272B] leading-5 md:leading-6 lg:leading-[24px] font-poppins">
              Secure, dedicated cloud infrastructures for sensitive
                operations.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudSolutions;