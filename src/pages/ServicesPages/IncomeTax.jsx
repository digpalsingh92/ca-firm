import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import FoundersMessage from "../../components/FoundersMessage";
import incomeImage from "../../Asset/income-tax.webp";
import WhyUsSection from "../../components/WhyUsSection";

const services = [
  {
    name: "Income Tax",
    description:
    " The tax landscapes have changed a great deal over the years, and the complexity of change in the tax scenario continues to grow at a fast pace. This change in the corporate and private space has brought about a greater shift in the way Tax authorities work, and therefore it is necessary to have the right procedures in place when it comes to taxes. Our trained Chartered Accountants provide easy and hassle free ways to help manage tax compliances.",
    image: incomeImage,
    subServices: [
      {
        name: "Income Tax Services",
        about: [
              "Survey Search & Seizer Consultancy",
              "Appearance before Investigation Wing of Income Tax Department (Section 153A to 153C cases)",
              "Appearance before Central Board of Direct Taxes (CBDT) and before Ministry of Finance",
              "Transfer Pricing matters-TP Study, TP Audit, TP Assessment & Objections with DRP",
              "Tax Evasion Petitions, CPGRAMS, raising grievances for long pending matters",
            ],
      }
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
            { name: "Income-tax" },
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
                className="w-[90%] h-[100%] rounded-md flex ml-4 items-center justify-center"
                src={service.image}
                alt={service.name}
              />
            </div>
            {/* Content Section */}
            <div className="w-[100%] h-[100%] flex flex-col p-4 items-center rounded-md">
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
                        {/* Toggle Icon */}
                        <span>{openSubService === subIndex ? "-" : "+"}</span>
                      </div>
                      {openSubService === subIndex && (
                        <div className="mt-2">
                          {/* If the about section contains multiple items */}
                          <ul className="list-inside list-disc pl-5 mt-2">
                            {subService.about.map((item, itemIndex) => (
                              <li key={itemIndex} className="mb-1">
                                {item}
                              </li>
                            ))}
                          </ul>
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

