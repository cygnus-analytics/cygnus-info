"use client";

import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import StrapiImage from "@/components/ui/StrapiImage";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const TeamMembers = ({ data }) => {
  if (!data || !data.Photos) return null;

  const teamMembers = data.Photos;

  const shapes = [
    "rounded-l-full",
    "rounded-t-full",
    "rounded-b-full",
    "rounded-full",
    "rounded-r-full",
  ];

  return (
    <div className=" bg-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-start mb-16"
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold ">
              {data?.title}
            </h2>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`md:col-span-4 flex justify-center ${
                index === 3
                  ? "md:col-start-3"
                  : index === 4
                  ? "md:col-start-7"
                  : ""
              }`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TeamMemberCard
                member={member}
                shape={shapes[index % shapes.length]}
                size="large"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member, shape, size = "medium" }) => {
  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-40 h-40",
    large: "w-56 h-56",
  };

  return (
    <motion.div whileHover={{ y: -5 }} className="group cursor-pointer">
      <div
        className={`${sizeClasses[size]} ${shape} overflow-hidden mb-4 transition-transform shadow-lg hover:shadow-xl relative`}
      >
        {member.image ? (
          <StrapiImage
            src={member.image}
            alt={member.name}
            className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
            width={224}
            height={224}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm">
            No Image
          </div>
        )}
      </div>
      <div className="text-center">
        <h3 className="font-bold text-xl mb-1">{member.name}</h3>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <span className="text-sm">{member.designation}</span>
          {member.href && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={member.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Linkedin size={16} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMembers;
