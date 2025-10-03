import { FaLock, FaLockOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import TrueFocus from "@/components/ui/TrueFocus";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CyberSecurity = () => {
  const data = [
    {
      heading: "PIM/PAM",
      content:
        "Secure your organization's most critical assets with our comprehensive Privileged Identity Management and Privileged Access Management solutions. We implement enterprise-grade PAM platforms that provide centralized control over privileged accounts, automated password rotation, and session monitoring. Our PIM/PAM services include privileged account discovery, secure password vaults, just-in-time access provisioning, and detailed audit trails. Protect against insider threats and external attacks by ensuring only authorized personnel have access to sensitive systems and data.",
    },
    {
      heading: "SIEM",
      content:
        "Transform your security posture with our advanced SIEM solutions that provide real-time threat detection and comprehensive security monitoring. Our SIEM implementation services offer centralized log management, automated threat correlation, and intelligent security analytics across your entire IT infrastructure. We deploy industry-leading SIEM platforms that aggregate security events from multiple sources, provide actionable insights through advanced dashboards, and enable rapid incident response. Stay ahead of cyber threats with 24/7 monitoring and automated alerting capabilities.",
    },
    {
      heading: "SCM",
      content:
        "Maintain robust security standards across your IT environment with our Security Configuration Management services. We implement automated configuration monitoring, vulnerability assessment, and compliance management solutions that ensure your systems remain secure and compliant with industry standards. Our SCM services include baseline configuration establishment, continuous compliance monitoring, automated remediation workflows, and comprehensive reporting. Reduce security risks and maintain regulatory compliance while streamlining your configuration management processes.",
    },
    {
      heading: "SOC",
      content:
        "Strengthen your cybersecurity defense with our comprehensive Security Operations Center services. Our SOC solutions provide round-the-clock security monitoring, threat hunting, and incident response capabilities delivered by certified security professionals. We offer both on-premise and cloud-based SOC implementations that include advanced threat detection, security orchestration, automated response procedures, and detailed forensic analysis. Enhance your security posture with proactive threat management and rapid incident containment.",
    },
    {
      heading: "IDAM",
      content:
        "Streamline user access control and enhance security with our Identity and Access Management solutions. We implement comprehensive IDAM frameworks that provide single sign-on (SSO), multi-factor authentication (MFA), user lifecycle management, and role-based access control. Our IDAM services ensure secure user authentication, automated provisioning and de-provisioning, and seamless integration with existing applications. Improve user experience while maintaining strict security controls across your digital ecosystem.",
    },
    {
      heading: "Cyber Audit",
      content:
        "Assess and strengthen your cybersecurity posture with our comprehensive Cyber Audit services. Our certified security professionals conduct thorough security assessments that identify vulnerabilities, evaluate security controls, and provide actionable recommendations for improvement. Our cyber audit services include penetration testing, vulnerability assessments, compliance audits, security policy reviews, and risk assessments. Gain valuable insights into your security landscape and receive detailed remediation roadmaps to enhance your overall cybersecurity resilience.",
    },
  ];

  return (
    <section className="h-auto py-40 px-4 sm:px-6 lg:px-10 bg-white">
      <TrueFocus
        sentence="Cyber Security"
        manualMode={false}
        blurAmount={3}
        borderColor="#2f48a5"
        animationDuration={1}
        pauseBetweenAnimations={1}
      />
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-md sm:text-lg text-gray-600 pb-10 max-w-7xl mx-auto text-left"
      >
        Fortifying Your Future with Cutting-Edge Security Solutions
      </motion.h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group bg-gradient-to-br from-green-500 via-sky-400 to-blue-500 relative p-6 hover:p-8 rounded-xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer h-32 sm:h-32 md:h-28 lg:h-32 hover:h-56 sm:hover:h-[38rem] md:hover:h-[32rem] lg:hover:h-[28rem] shadow-lg"
          >
            <motion.div className="absolute text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 inset-0 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
              <h2 className="text-lg sm:text-xl font-semibold text-center text-white mb-2">
                {item.heading}
              </h2>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <FaLock className="mt-3 w-6 h-6 sm:w-7 sm:h-7" />
              </motion.div>
            </motion.div>

            {/* Back Face */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <p className="text-sm sm:text-base text-center text-white">
                {item.content}
              </p>
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FaLockOpen className="mt-5 w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CyberSecurity;
