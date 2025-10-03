
const AudioVideoScreens = () => {
  const audioVideoData = [
    {
      title: "Wall-Mounted Screens",
      description: "Space-efficient solutions for dynamic environments.",
    },
    {
      title: "3D Monitors",
      description: "Immersive technology for cutting-edge applications.",
    },
    {
      title: "Screens",
      description: "Advanced displays for collaboration and visualization.",
    },
  ];
  
  return (
    <>
    <section className="py-24 bg-[#FDFDFF]">
        <h2 className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-semibold px-6 pb-6">
          Audio-Video Screens
        </h2>
        <div className="mx-auto max-w-7xl border border-gray-200 shadow-xl h-[20rem] rounded-xl mt-8"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto mt-16">
          {Array.from({ length: 6 }).map((_, index) => {
            const item = audioVideoData[Math.floor(index / 2)];
            return index % 2 === 0 ? (
              <div
                key={index}
                className="bg-gradient-to-b from-[#FDFDFF] to-[#CCE1FF] inline-flex px-5 py-20 flex-col items-center gap-3 rounded-lg shadow-lg"
              >
                <h3 className="text-[#25272B] text-center font-poppins text-[24px] font-semibold leading-[32px]">
                  {" "}
                  {item.title}
                </h3>
                <p className="text-[#25272B] text-center font-poppins text-[18px] font-normal leading-[24px] tracking-[0.36px]">
                  {" "}
                  {item.description}
                </p>
              </div>
            ) : (
              <div key={index}></div>
            );
          })}
        </div>
      </section>

    </>
  )
}

export default AudioVideoScreens