"use client";
import { ContainerScroll } from "../ui/ContainerScroll";
import { motion } from "framer-motion";

export default function HeroScrollDemo() {
  const hpcVideoPath = "../../../public/solutionpics/hpc.mp4";
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-4"
            >
              <span className="font-bold mt-1 leading-none">
                High Performance Computing Cluster
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-md sm:text-md md:text-lg text-gray-600 max-w-4xl mx-auto mb-20"
            >
              Accelerate complex computations and data-intensive workflows with
              our High Performance Computing (HPC) Cluster solutions. Designed
              for research institutions, engineering firms, and enterprises
              handling large-scale simulations, analytics, and machine learning,
              our HPC clusters deliver unmatched processing power and
              scalability. Key features include:
            </motion.p>
          </>
        }
      >
        <video
          src={hpcVideoPath}
          alt="hero"
          width={1400}
          height={720}
          className="mx-auto rounded-2xl object-cover h-full w-full"
          autoPlay
          muted
          loop
        />
      </ContainerScroll>
    </div>
  );
}
