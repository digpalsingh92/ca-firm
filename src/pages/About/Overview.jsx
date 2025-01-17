import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "../../components/Breadcrumb";
import teamImage from "../../Asset/team.webp";
import teamImage2 from "../../Asset/team2.webp";
import teamImage3 from "../../Asset/team3.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Overview() {
  return (
    <div className="w-full p-5 bg-white">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { name: "Home", link: "/" },
          { name: "About", link: "/about" },
        ]}
      />

      {/* About Us Section */}
      <motion.section
        className="w-full py-10 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="container mx-auto text-center px-4"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-6">About Us</h1>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8">
            Welcome to Kalpana Chauhan & Associates, a full-service Chartered
            Accountancy Firm dedicated to delivering exceptional financial and
            advisory services. With years of experience, we serve clients
            across India from our offices located in the Delhi/NCR region.
          </p>
          <motion.img
            src={teamImage2}
            alt="Our Team"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            variants={fadeInUp}
          />
        </motion.div>
      </motion.section>

      {/* Mission and Vision Section */}
      <motion.section
        className="w-full py-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          {/* Mission */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Our mission is to provide personalized, high-quality accounting,
              auditing, and financial services to our clients. We strive to
              build long-term relationships based on trust, integrity, and
              professionalism.
            </p>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-slate-600">
              Our vision is to be the most trusted and respected professional
              services firm recognized by our clients for delivering excellence.
              We aim to grow our presence across India while maintaining our
              commitment to quality and client satisfaction.
            </p>
          </motion.div>
          {/* Image */}
          <motion.div className="flex justify-center" variants={fadeInUp}>
            <img
              src={teamImage}
              alt="Our Vision"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="w-full py-10 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          {/* Image */}
          <motion.div className="flex justify-center" variants={fadeInUp}>
            <img
              src={teamImage3}
              alt="Our Values"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
          {/* Values */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Values
            </h2>
            <ul className="list-disc pl-5 text-lg text-slate-600 space-y-2">
              <li>
                <strong>Integrity:</strong> We uphold the highest standards of
                integrity in all our actions.
              </li>
              <li>
                <strong>Professionalism:</strong> We provide professional and
                high-quality services.
              </li>
              <li>
                <strong>Client Focus:</strong> Our clients' needs are at the
                forefront of everything we do.
              </li>
              <li>
                <strong>Excellence:</strong> We continually strive for
                excellence in our services.
              </li>
              <li>
                <strong>Collaboration:</strong> We believe in teamwork and
                collaboration to achieve the best results.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
