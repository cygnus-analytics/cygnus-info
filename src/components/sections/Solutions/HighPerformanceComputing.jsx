import hpc from "../../assets/solutionpics/hpc.mp4";

const HighPerformanceComputing = () => {
  return (
    <>
      <section className="py-24">
        <h2 className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-semibold px-6 pb-6">
          High Performance Computing
        </h2>

        <div className="relative w-[1280px] h-[501px] mx-auto mt-12">
          <video
            src={hpc}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          ></video>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
              <p className="text-gray-600 text-center font-poppins text-[24px] font-semibold leading-[32px] px-6 bg-black bg-opacity-50 rounded-lg p-4">
                Cutting-edge clusters and parallel file systems (e.g., Lustre, GPFS) to handle complex workloads like geophysical data processing
              </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighPerformanceComputing;
