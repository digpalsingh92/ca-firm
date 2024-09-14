import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import FoundersMessage from "../../components/FoundersMessage";
import AuditingImage from "../../Asset/Auditing.webp";
import WhyUsSection from "../../components/WhyUsSection";

const services = [
  {
    name: "Auditing & Assurance Services",
    description:
      "With businesses seeking greater success on a global scale, it is becoming more and more important to set the right regulatory practices in auditing and assurance. This is where we come into the picture and assist you in meeting these demands with a thorough auditing and seamless assurance. We not just provide great services for you and your organization, but also give way to clear and transparent information, which is beneficial for your stakeholders and investors.",
    image: AuditingImage,
    subServices: [
      {
        name: "Statutory Audit",
        about:
          "A statutory audit is a legally required review of the accuracy of a company's financial statements and records.",
      },
      {
        name: "Internal Audit",
        about:
          "An internal audit provides independent assurance that the key risks facing an organization have been identified and managed, ensuring systems and controls are robust.",
        subServices: [
          {
            name: "Stock Audit",
            about:
              "Stock Audit is necessarily required to be conducted at the borrower's place for obvious reasons. It helps in understanding the entity's banking operations.",
          },
          {
            name: "Process Audit",
            about:
              "Process Audit checks the effectiveness and efficiency of existing business processes, identifying bottlenecks and opportunities for improvement.",
          },
        ],
      },
      {
        name: "Income Tax Audit",
        about:
          "Income Tax Audit u/s 44 AB ensures that records of businesses are properly maintained for taxation purposes.",
      },
    ],
  },
];

export default function Auditing() {
  const [openSubService, setOpenSubService] = useState(null); // Manage open sub-service

  const toggleSubService = (index) => {
    if (openSubService === index) {
      setOpenSubService(null); // Close if already open
    } else {
      setOpenSubService(index); // Open the clicked sub-service
    }
  };

  return (
    <section>
      <div className="w-full h-full bg-white">
        <Breadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "Services", link: "/services" },
            { name: "Auditing & Assurance" },
          ]}
        />
        {services.map((service, index) => (
          <div
            key={index}
            className="w-[80%] h-[100%] mx-auto flex p-2 justify-center items-center"
          >
            {/* Image Section */}
            <div className="w-[30%] h-[30%] flex flex-col p-4 items-center rounded-md">
              <img
                className="w-[90%] h-[90%] rounded-md flex ml-4 items-center justify-center"
                src={service.image}
                alt={`${service.name} image`}
              />
            </div>

            {/* Content Section */}
            <div className="w-[80%] h-[80%] flex flex-col p-4 items-center rounded-md">
              <h1 className="text-3xl font-medium mb-4">{service.name}</h1>
              <div className="w-full flex flex-col justify-center items-center">
                <p className="w-[70%] text-left mb-4">{service.description}</p>

                {/* Sub-services with dropdown */}
                <ul className="list-disc pl-5 mb-4 w-[70%]">
                  {service.subServices.map((subService, subIndex) => (
                    <li key={subIndex} className="mb-2">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSubService(subIndex)}
                      >
                        <strong>{subService.name}</strong>
                        {/* Toggle Icon (Optional) */}
                        <span>{openSubService === subIndex ? "-" : "+"}</span>
                      </div>
                      {openSubService === subIndex && (
                        <div className="mt-2">
                          <p>{subService.about}</p>
                          {subService.subServices && (
                            <ul className="list-inside list-disc pl-5 mt-2">
                              {subService.subServices.map((nestedService, nestedIndex) => (
                                <li key={nestedIndex}>
                                  <strong>{nestedService.name}</strong>: {nestedService.about}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enquire Button */}
              <Link
                to={`/contact`}
                className="mt-4 inline-block h-[8%] w-[8rem] items-center bg-slate-800 text-white py-2 px-4 rounded-md shadow hover:bg-teal-600"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        ))}
        <WhyUsSection />
        <FoundersMessage />
      </div>
    </section>
  );
}
