import { AiOutlineEye } from "react-icons/ai"; 
import { FaTools, FaHandsHelping } from "react-icons/fa";
import { BsLightbulb } from "react-icons/bs";
import { motion } from "framer-motion";

const Values = () => {
  const values = [
    {
      icon: <AiOutlineEye className="text-blue-800 size-8" />,
      heading: "Default to Transparency",
      content:
        "We communicate openly with clients and teammates alike, sharing progress, trade-offs, and setbacks honestly so everyone can make informed decisions together.",
    },
    {
      icon: <FaTools className="text-blue-800 size-8" />,
      heading: "Improve Consistently",
      content:
        "We treat every project as a chance to sharpen our craft, investing in new tools, training, and processes so our solutions keep getting faster, safer, and smarter.",
    },
    {
      icon: <FaHandsHelping className="text-blue-800 size-8" />,
      heading: "Show Gratitude",
      content:
        "We recognize the effort behind every win, celebrating our team's contributions and the trust our clients place in us at every step of the journey.",
    },
    {
      icon: <BsLightbulb className="text-blue-800 size-8" />,
      heading: "Reflect to Unblock",
      content:
        "When we hit a roadblock, we pause to understand the root cause rather than just patching symptoms, turning every challenge into a lasting improvement.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-blue-400 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-blue-900 mb-4"
        >
          Our Values
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 leading-relaxed mb-12"
        >
          Cygnus is an inclusive workplace that welcomes and nurtures talented,
          creative, and hard-working people who like to think independently and
          take ownership of projects. We ensure that our efficient team helps
          our clients exploit opportunities and gain a competitive advantage
          amidst the changing business and technology landscape.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {values.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white rounded-lg shadow-lg transition-transform"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">{card.icon}</div>
                <h3 className="text-lg font-semibold text-blue-900">
                  {card.heading}
                </h3>
              </div>
              <p className="text-gray-600">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
