import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import FoundersMessage from "../../components/FoundersMessage";
import WhyUsSection from "../../components/WhyUsSection";
import societyImage from "../../Asset/society-trust.webp";

const services = [
  {
    name: "Societies, Trusts & NGOs",
    description:
"Non-Profit Organizations (NGOs) can be established as trusts, societies, or Section 8 companies. Each has different characteristics, including governance, membership requirements, and legal compliance. The entity you choose depends on your organization's goals and objectives.",
    image: societyImage,
    subServices: [
      {
        name: "Trust",
        about:
"A trust is a legal arrangement where a trustee manages assets for the benefit of beneficiaries. Trusts can be established for a variety of purposes, such as providing for a child's education or managing assets for someone who can't manage them themselves.",
      },
      {
        name: "Societies",
        about:
"Societies are membership organizations that can be registered for charitable purposes. However, societies can't function as independent associations and can only function as an advocacy",
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
            { name: "trust-ngo" },
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
                className="w-[70%] h-[70%] flex ml-4 items-center justify-center"
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
