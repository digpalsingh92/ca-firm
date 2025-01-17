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
      "The history of accounting goes back a 1000 years, but the relevance of it still stays strong, today! Keeping up with the multiple aspects of a business can be difficult, and that is why we are here to offer bookkeeping, succession planning and strategic planning, so that you can focus on other important matters and not worry about the financial accounting of your organization. An accountant is responsible for offering strategic financial advice in addition to being aware of the company's financial situation. Bookkeeping services is the process of keeping records of financial transactions and preparing financial statements, such as balance sheets and income statements.",
    image: Accounting,
    subServices: [
      {
        name: "Accounting & Bookkeeping",
        about:
          "Book Keeping and Accounting for Individuals, Firms, NGOs, and Companies including foreign Companies.",
      },
    ],
  },
];

export default function Auditing() {
  const [openSubService, setOpenSubService] = useState(null);

  const toggleSubService = (index) => {
    setOpenSubService(openSubService === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumb Section */}
      <Breadcrumb
        items={[
          { name: "Home", link: "/" },
          { name: "Services", link: "/services" },
          { name: "Accounting" },
        ]}
      />

      {/* Services Section */}
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-row sm:flex-col items-center gap-6 mt-6 mb-12 p-4"
        >
          {/* Image Section */}
          <div className="w-full sm:w-1/3 flex justify-center">
            <img
              className="w-full max-w-sm sm:max-w-md h-full rounded-md object-contain"
              src={service.image}
              alt={`${service.name} image`}
            />
          </div>

          {/* Content Section */}
          <div className="w-full sm:w-2/3">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">
              {service.name}
            </h1>
            <p className="text-sm sm:text-base text-justify sm:text-left mb-4">
              {service.description}
            </p>

            {/* Sub-services Section */}
            <ul className="list-disc pl-5">
              {service.subServices.map((subService, subIndex) => (
                <li key={subIndex} className="mb-3">
                  <div
                    className="flex justify-between items-center cursor-pointer text-base font-medium"
                    onClick={() => toggleSubService(subIndex)}
                  >
                    {subService.name}
                    <span className="text-lg">
                      {openSubService === subIndex ? "-" : "+"}
                    </span>
                  </div>
                  {openSubService === subIndex && (
                    <div className="mt-2 pl-4 text-sm text-gray-600">
                      {subService.about}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Why Us Section */}
      <WhyUsSection />
    </div>
  );
}
