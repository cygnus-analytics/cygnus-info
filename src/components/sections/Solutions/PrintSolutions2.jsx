"use client";
import Image from "next/image";
import { StickyScroll } from "../../ui/StickyScroll";
import p1 from "../../../../public/solutionpics/p1.jpg"
import p2 from "../../../../public/solutionpics/p2.jpg";
import p3 from "../../../../public/solutionpics/p3.jpg";

const printerData = [
  {
    title: "Printers",
    description: "Our diverse range of printers offers unparalleled reliability and quality for every need, from a simple home office to a bustling corporate environment. Whether you require a compact inkjet for vibrant photos or a high-speed laser printer for sharp documents, our solutions ensure seamless, efficient, and cost-effective printing with every use, supporting all scales of operation.",
    image: p1,
  },
  {
    title: "Scanners",
    description: "Streamline your document management with our high-quality scanners, engineered for precision and speed. Transform physical documents into digital files effortlessly, improving accessibility and reducing clutter. With features like automatic document feeding and intuitive software, our scanners are designed to enhance workflow efficiency and integrate seamlessly into modern, digitized workspaces.",
    image: p2,
  },
  {
    title: "Enterprise-Level Printers",
    description: "Built for the demands of high-volume operations, our enterprise-level printers provide robust performance, unmatched speed, and exceptional security. These systems are designed to handle complex printing tasks for large organizations, ensuring continuous productivity without compromise. With advanced features and comprehensive management options, they offer a secure and reliable solution for mission-critical printing needs.",
    image: p3,
  },
];

const content = printerData.map((item) => ({
  title: item.title,
  description: item.description,
  content: (
    <div className="relative flex h-full w-full items-center justify-center text-white">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 480px"
        className="object-cover rounded-xl"
      />
    </div>
  ),
}));

export default function StickyScrollRevealDemo() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}