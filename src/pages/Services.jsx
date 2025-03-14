import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import FoundersMessage from "../components/FoundersMessage";
import WhyUsSection from "../components/WhyUsSection";
import { Helmet } from "react-helmet";

const services = [
  { id: 1, urlend: "accounting", name: "Accounting" },
  { id: 2, urlend: "auditing-assurance", name: "Auditing Assurance" },
  { id: 3, urlend: "income-tax", name: "Income Tax" },
  { id: 4, urlend: "gst", name: "GST" },
  {
    id: 5,
    urlend: "company-law-matters",
    name: "Company Law Matters Consultancy",
  },
  { id: 6, urlend: "trust-ngo", name: "Societies and Trust (NGO)" },
  {
    id: 7,
    urlend: "foreign-collaborations-services",
    name: "Foreign Collaborations Services",
  },
  {
    id: 8,
    urlend: "import-export-consultancy",
    name: "Import Export Consultancy",
  },
  { id: 9, urlend: "finance", name: "Finance" },
  { id: 10, urlend: "other-services", name: "Other Services" },
];

const serviceDetails = {
  1: {
    title: "Accounting",
    description: [
      "The history of accounting goes back a 1000 years, but the relevance of it still stays strong, today! Keeping up with the multiple aspects of a business can be difficult, and that is why we are here to offer bookkeeping, succession planning and strategic planning, so that you can focus on other important matters and not worry about the financial accounting of your organization.",
      "Book Keeping and Accounting for Individuals, Firms, NGOs and Companies including foreign Companies",
      "Design, implementation and review of accounting manual",
      "Advice on various Accounting Standards, Ind AS & IFRS",
    ],
  },
  2: {
    title: "Auditing & Assurance",
    description: [
      "With businesses seeking greater success on a global scale, it is becoming more and more important to set the right regulatory practices in auditing and assurance. This is where we come into the picture and assist you in meeting these demands with a thorough auditing and seamless assurance. We not just provide great services for you and your organization, but also give way to clear and transparent information, which is beneficial for your stakeholders and investors.",
      "Detailed information about Auditing & Assurance services provided by our firm.",
      "Ensuring compliance with regulatory requirements.",
      "Identifying areas for improvement in financial reporting.",
    ],
  },
  3: {
    title: "Income Tax",
    description: [
      "Income tax planning and compliance services.",
      "Assistance with filing income tax returns.",
      "Representation before tax authorities.",
    ],
  },
  4: {
    title: "Goods & Services Tax (GST)",
    description: [
      "GST registration and compliance services.",
      "Advice on GST law and regulations.",
      "Assistance with GST audits and assessments.",
    ],
  },
  5: {
    title: "Company Law Matters Consultancy",
    description: [
      "Consultancy on company law matters.",
      "Assistance with company formation and compliance.",
      "Advice on corporate governance.",
    ],
  },

  6: {
    title: "Societies and Trust (NGO)",
    description: [
      "Consultancy for societies and trusts (NGOs).",
      "Assistance with regulatory compliance.",
      "Support for fundraising and grant applications.",
    ],
  },
  7: {
    title: "Foreign Collaborations Services",
    description: [
      "Consultancy for foreign collaborations.",
      "Assistance with joint ventures and partnerships.",
      "Advice on regulatory compliance.",
    ],
  },
  8: {
    title: "Payroll Processing",
    description: [
      "Salary compositions/ break up",
      "Preparation of salary masters",
      "	Tax withholding from the payroll",
      "Preparing secure pay slips",
    ],
  },
  9: {
    title: "Import Export Consultancy",
    description: [
      "Consultancy for import-export businesses.",
      "Assistance with regulatory compliance.",
      "Advice on international trade laws.",
    ],
  },
  10: {
    title: "Other Services",
    description: [
      "Business consulting services / Business Process Outsourcing (BPOs)",
      "Startup Services",
      "Legal & Secretarial Services",
    ],
  },
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
      <>
    <Helmet>
            <title>Our Services - KCA TaxCare</title>
            <meta name="description" content="Explore our comprehensive range of accounting and financial services." />
          </Helmet>
    <section>
      <Breadcrumb items={[{ name: "Home", link: "/" }, { name: "services" }]} />
      <div className="flex flex-col md:flex-row w-full mt-[70px] justify-center m-auto min-h-[70vh] p-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 h-fit bg-gray-100 p-5 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <button
                  onClick={() => handleServiceClick(service)}
                  className={`w-full text-left px-4 py-2 mb-2 rounded-md hover:text-white font-medium text-base ${
                    selectedService.id === service.id
                      ? "bg-teal-600"
                      : "hover:bg-teal-600"
                  }`}
                >
                  {service.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Main Content */}
        <div className="w-full md:w-2/4 h-full p-4 md:p-8 md:ml-10 rounded-md bg-white">
          <h1 className="text-3xl font-bold mb-4">
            {serviceDetails[selectedService.id].title}
          </h1>
          <ul className="list-disc pl-5 mb-4">
            {serviceDetails[selectedService.id].description.map(
              (point, index) => (
                <li key={index}>{point}</li>
              )
            )}
          </ul>
          <Link
            to={`/services/${selectedService.urlend
              .toLowerCase()
              .replace(/ /g, "-")}`}
            className="mt-4 inline-block bg-slate-800 text-white py-2 px-4 rounded-md shadow hover:bg-teal-600"
          >
            Read More
          </Link>
        </div>
      </div>
      <WhyUsSection />
      <FoundersMessage />
    </section>
    </>
  );
};

export default Services;
