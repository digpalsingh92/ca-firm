import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import FoundersMessage from "../../components/FoundersMessage";
import payrollImage from "../../Asset/payroll-process.webp";
import WhyUsSection from "../../components/WhyUsSection";

const services = [
  {
    name: "Payroll Processing",
    description:
"payroll process involves calculating what is due to the employees for a specific payroll cycle after adjusting the required deductions like employees' PF contribution, TDS, meal coupons, etc. The payroll cycle is the gap between two salary disbursements of an employee",
    image: payrollImage,
    subServices: [
      {
        name: "Payroll Processing Services",
        about: [
          "Salary compositions/ break up",
          "	Preparation of salary masters",
          "	Preparation of monthly payroll sheets",
          "	Tax withholding from the payroll",
          "	Preparing secure pay slips",
          "	Arranging the payment of salaries by preparing Bank transfer advice in bank specific formats",
          "	Taking care of the all the Income Tax forms as well"
        ],
      },
    ],
  },
];

export default function PayrollProcessing() {
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
            <div className="w-[90%] h-[100%] flex flex-col p-4 items-center rounded-md">
              <h1 className="text-3xl font-medium mb-4">{service.name}</h1>
              <div className="w-full flex flex-col justify-center items-center">
                <p className="w-[75%] text-left mb-4">{service.description}</p>

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
