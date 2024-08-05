import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import FoundersMessage from "../../Components/FoundersMessage";

const BulletPoints = {
  items: [
    "Formation of company in India, viz. Private Limited, Public Limited, wholly owned subsidiary company, One Person Company (OPC), Limited Liability Partnership (LLP), etc.",
    "ll matters related with Registrar of Companies (ROC), Regional Director (RD) & National Company Law Tribunal (NCLT)",
    "aintenance & compliance of Statutory Records",
    "erger & acquisitions",
    "orporate restructuring",
    "aluation of Equity Shares",
    "BRL filings",
    "onsultancy in above matters",
  ],
};

export default function CompanyLaw() {
  return (
    <section>
      <div className="w-full h-full bg-white">
        <Breadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "services", link: "/services" },
            { name: "company-law-matters" },
          ]}
        />
        <div className="w-[100%] h-[80%] mt-4 mb-10 flex justify-center items-center ">
          <div className="w-[80%] h-[80%] flex flex-col p-4 items-center rounded-md  ">
            <h1 className="text-3xl font-bold mb-4">
              Company Law Consultancy | Expert Advice & Solutions
            </h1>
            <div className=" w-full flex flex-col justify-center items-center">
              <p className=" w-[70%] text-left">
                Whether it is the formation of Indian or offshore organizations,
                clients require thorough assistance with several aspects related
                to business. Strategic planning is as important as risk analysis
                and future profitability and therefore we provide seamless
                services in Company Law matters that can help you pave the way
                to a successful and lucrative tomorrow!
              </p>
              <ul className=" w-[70%] list-disc pl-5 mb-4">
                {BulletPoints.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <Link
              to={`/contact`}
              className="mt-4 inline-block h-[8%] w-[10%] items-center bg-slate-800 text-white py-2 px-4 rounded-md shadow hover:bg-teal-600"
            >
              Enquire Now
            </Link>
          </div>
        </div>
        <FoundersMessage />
      </div>
    </section>
  );
}