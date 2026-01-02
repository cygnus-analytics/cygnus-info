"use client";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import StrapiImage from "@/components/ui/StrapiImage";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const TeamMembers = ({ data }) => {
  if (!data || !data.Photos) return null;

  const teamMembers = data.Photos;

  const firstRow = teamMembers.slice(0, 4); 
  const secondRow = teamMembers.slice(4);

  return (
    <section className="pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:5xl font-bold text-neutral-900 mb-2">
            {data?.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Meet the team behind Cygnus success
          </p>
        </motion.div>

        {/* First Row (Always 4 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {firstRow.map((member, index) => (
            <motion.div
              key={member.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>

        {secondRow.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            <div className="hidden lg:block"></div>

            {/* TWO MEMBERS IN CENTER */}
            {secondRow.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}

            {/* EMPTY RIGHT GRID */}
            <div className="hidden lg:block"></div>

          </div>
        )}
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group cursor-pointer rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-200"
    >
      {/* Image */}
      <div className="w-full h-88 overflow-hidden rounded-t-xl mb-5">
        {member.image ? (
          <StrapiImage
            src={member.image}
            alt={member.name}
            width={300}
            height={300}
            className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-100 text-neutral-500 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* Details */}
      <div className="text-center px-3 pb-4">
        <h3 className="text-xl font-semibold text-neutral-900">
          {member.name}
        </h3>
        <p className="text-neutral-600 text-sm mb-3">{member.designation}</p>

        {member.href && (
          <motion.a
            whileHover={{ scale: 1.15 }}
            href={member.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-neutral-900 hover:text-blue-800 transition-colors"
          >
            <FaLinkedin size={20} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMembers;
