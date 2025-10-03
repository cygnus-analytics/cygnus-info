import mem1 from "../../../../public/team/mem1.jpg"
import mem2 from "../../../../public/team/mem2.jpg"
import mem3 from "../../../../public/team/mem3.jpg"
import mem4 from "../../../../public/team/mem4.jpg"
import mem5 from "../../../../public/team/mem5.jpg"
import mem6 from "../../../../public/team/mem6.jpg"
import mem7 from "../../../../public/team/mem7.jpg"

const casepics = [
    { src: "/team/mem1.jpg", alt: "AWS" },
    { src: "/team/mem2.jpg", alt: "Hp" },
    { src: "/team/mem3.jpg", alt: "Nvidia" },
    { src: "/team/mem4.jpg", alt: "Cisco" },
    { src: "/team/mem5.jpg", alt: "Hewlett" },
    { src: "/team/mem6.jpg", alt: "Ibm" },
    { src: "/team/mem7.jpg", alt: "Microsoft" },
  ];

const Memories = () => {
  return (
    <div className="relative overflow-hidden py-24 ">
      <div className="flex animate-marquee space-x-8 md:space-x-12 lg:space-x-16">
        {casepics.concat(casepics).map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className={`object-cover rounded-lg shadow-lg transition-transform duration-300 ${
              index % 2 === 0 ? "translate-y-12" : "-translate-y-4"
            } h-40 w-60 md:h-48 md:w-72 lg:h-56 lg:w-80`}
          />
        ))}
      </div>
    </div>
  );
};

export default Memories;
