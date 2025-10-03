"use client";

import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const TeamMembers = () => {
  const teamMembers = [
    { id: 1, name: "Rajesh Mishra", role: "Director", image: "/heads/Rajesh Mishra.jpg", shape: "rounded-l-full", linkedin: "https://www.linkedin.com/in/rajesh-mishra-11414221/" },
    { id: 2, name: "Sumit Srivastava", role: "Managing Director", image: "/heads/Sumit Srivastava.jpg", shape: "rounded-t-full", linkedin: "https://www.linkedin.com/in/sumit-srivastava-04205925/" },
    { id: 3, name: "Hemang Shah", role: "Associate Director", image: "/heads/Hemang Shah.jpg", shape: "rounded-full", linkedin: "https://www.linkedin.com/in/hemang-shah-60596b109/" },
    { id: 4, name: "Hardik Narielwala", role: "Executive Director", image: "/heads/Hardik Narielwala.jpg", shape: "rounded-r-full", linkedin: "https://www.linkedin.com/in/hardik-narielwala-3120a250/" },
    { id: 5, name: "Parmanand Pandey", role: "Vice President", image: "/heads/Parmanand Pandey.jpg", shape: "rounded-l-full", linkedin: "https://www.linkedin.com/in/parmanand-pandey-946b9a24/" },
    { id: 6, name: "Sanjeev Jha", role: "Director - HR, Strategy", image: "/heads/sanjiv-jha.jpg", shape: "rounded-b-full", linkedin: "https://www.linkedin.com/in/thesanjeevjha/" },
    { id: 7, name: "Tushar Gavande", role: "Vice President - Hybrid IT", image: null, shape: "rounded-r-full", linkedin: "https://www.linkedin.com/in/tushar-gavande-0624131b/" },
  ];

  return (
    <div className="min-h-screen bg-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-start mb-16"
        >
          <div>
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              {/* <div className="w-4 h-4 bg-black transform rotate-45"></div> */}
              {/* <span className="text-lg font-medium">Our Team</span> */}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              The Team Behind Your
              <br />
             Digital Success
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
              <TeamMemberCard member={member} size="large" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member, size = "medium" }) => {
  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-40 h-40",
    large: "w-56 h-56",
  };

  return (
    <motion.div whileHover={{ y: -5 }} className="group cursor-pointer">
      <div
        className={`${sizeClasses[size]} ${member.shape} overflow-hidden mb-4 transition-transform shadow-lg hover:shadow-xl relative`}
      >
        {member.image ? (
         <Image
         src={member.image}
         alt={member.name}
         width={224}  
         height={224}
         className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
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
          <span className="text-sm">{member.role}</span>
          {member.linkedin && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={member.linkedin}
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
