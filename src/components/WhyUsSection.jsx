import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "ETHICS",
    description:
      "CAs must adhere to strict ethical standards to ensure transparent and accurate financial reporting.",
    details:
      "Ethics in the profession of Chartered Accountancy means adherence to rules and regulations that aim to provide transparency in financial reporting. By maintaining a high level of ethical behavior, CAs ensure fairness, honesty, and clarity in financial transactions.",
  },
  {
    title: "INTEGRITY",
    description:
      "CAs must be straightforward and honest in all professional and business relationships.",
    details:
      "Integrity is the foundation of trust in the financial sector. Chartered Accountants must exhibit sincerity and straightforwardness in all dealings, ensuring clients and stakeholders have confidence in their work. It's about being consistent, truthful, and clear.",
  },
  {
    title: "PROFESSIONAL BEHAVIOR",
    description:
      "CAs must exhibit professional behavior in all their actions.",
    details:
      "Professional behavior means maintaining the high standards of the Chartered Accountancy profession. CAs must continuously develop their skills, maintain confidentiality, and show a commitment to their responsibilities towards clients, the public, and other professionals.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">Why you Should Choose us</h2>
      <motion.div
        className="container mx-auto flex flex-col md:flex-row justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Circle Icon */}
            <div className="flex justify-center">
              <motion.div
                className="rounded-full bg-teal-500 text-white p-4 w-16 h-16 flex justify-center items-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-xl font-bold">{pillar.title[0]}</span>
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold text-center mt-4 text-teal-600">
              {pillar.title}
            </h3>
            <p className="text-gray-600 text-center mt-4 px-4">
              {pillar.description}
            </p>
            <div className="mt-4 flex justify-center">
              <motion.button
                onClick={() => window.alert(pillar.details)}
                className="text-teal-500 underline hover:text-teal-700 transition duration-200"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Read More
              </motion.button>
            </div>
            {/* Subtle Background Decoration */}
            <motion.div
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20"
              animate={{ x: 20, y: 20 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyUsSection;
