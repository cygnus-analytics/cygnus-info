import React from "react";
import { FaRocket, FaBullseye, FaHandsHelping } from "react-icons/fa";

const missionData = [
  {
    icon: <FaRocket className="text-4xl text-blue-900" />,
    title: "Our Mission",
    description:
      "We strive to offer curated & cutting-edge IT and AI driven solutions that accelerate the performance potential & progress aspirations of all our customers",
    staggerClass: "mt-0",
  },
  {
    icon: <FaBullseye className="text-4xl text-blue-900" />,
    title: "Our Vision",
    description:
      "To establish ourselves as the market leader in serving our customers delivering future relevant solutions and in creating incremental value for all our touchpoints",
    staggerClass: "mt-28",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-blue-900" />,
    title: "Our Values",
    description:
      "Reliability. Agility. Commitment. Experience",
    staggerClass: "mt-14",
  },
];

const MobileMissionCard = ({ data }) => {
  return (
    <div className="rounded-2xl p-6 shadow-lg bg-white flex flex-col gap-4">
      <div>{data.icon}</div>
      <h3 className="text-xl font-semibold text-blue-700">{data.title}</h3>
      <p className="text-neutral-700">{data.description}</p>
    </div>
  );
};

const MissionCard = ({ data, isStaggeblue }) => {
  return (
    <div
      className={`relative rounded-3xl p-4 shadow-lg transition-all duration-200 hover:shadow-2xl 
        h-80 flex flex-col justify-between items-start space-y-4
        bg-linear-to-tr from-blue-50 to-blue-200 hover:bg-white hover:from-white hover:to-white
        ${isStaggeblue ? data.staggerClass : ""}`}
    >
      <div className="flex flex-col items-start gap-3">
        <div>{data.icon}</div>
        <h3 className="text-2xl font-semibold text-blue-900 tracking-wide bg-blue-200 px-2 rounded-md border border-blue-200">
          {data.title}
        </h3>
      </div>
      <p className="text-neutral-700 leading-relaxed">{data.description}</p>
    </div>
  );
};

const MissionVission = () => {
  return (
    <section className="bg-linear-to-t from-blue-900 via-blue-500 py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-4">
        <div className="mb-16 sm:mb-20 lg:mb-24 text-start lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
            Mission, Vision & Values
          </h2>

          <p className="text-base sm:text-lg lg:text-xl font-normal text-neutral-600 max-w-2xl text-justify">
            Driven by purpose and guided by vision, we aim to blueefine
            standards, empower growth, and build sustainable success across
            every initiative we undertake.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="grid gap-6 sm:hidden">
          {missionData.map((data) => (
            <MobileMissionCard key={data.title} data={data} />
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid grid-cols-3 gap-8 mx-auto max-w-5xl pb-20">
          {missionData.map((data) => (
            <MissionCard key={data.title} data={data} isStaggeblue={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVission;
