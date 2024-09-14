import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import FoundersMessage from "../../components/FoundersMessage";
import Accounting from "../../Asset/Accounting.webp";
import WhyUsSection from "../../components/WhyUsSection";

const services = [
  {
    name: "Accounting & Bookkeeping",
    description:
      "The history of accounting goes back a 1000 years, but the relevance of it still stays strong, today! Keeping up with the multiple aspects of a business can be difficult, and that is why we are here to offer bookkeeping, succession planning and strategic planning, so that you can focus on other important matters and not worry about the financial accounting of your organization.  An accountant is responsible for offering strategic financial advice in addition to being aware of the company's financial situation. Bookkeeping services is the process of keeping records of financial transactions and preparing financial statements, such as balance sheets and income statements",
    image: Accounting,
    subServices: [
      {
        name: "Accounting & Bookkeeping",
        about:
          " Book Keeping and Accounting for Individuals, Firms, NGOs and Companies including foreign Companies. ",
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
            { name: "accounting" },
          ]}
        />
        {services.map((service, index) => (
          <div
            key={index}
            className="w-[90%] h-[100%] mt-4 mb-10 flex p-2 justify-center items-center"
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
