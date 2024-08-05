import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import FoundersMessage from "../../Components/FoundersMessage";

const BulletPoints = {
  items: [
    "Statutory Audit",
    "Internal Audit",
    "Internal Financial Control (IFC) over financial reporting Audit",
    "Bank Concurrent Audit",
    "Bank Statutory Audit",
    "Income Tax Audit u/s 44 AB",
    "Transfer Pricing Audit u/s 92 E",
    "GST Audit",
    "Form 10B Audit in case of NGO",
    "Forensic Audit",
    "Due diligence",
    "Certification work",
    "Audit of Form 15CB of Income Tax Act and Issue Form 15CA",
    "SOX Compliance to ensure adequate internal controls are in place and effective",
  ],
};

export default function Auditing() {
  return (
    <section>
      <div className="w-full h-full bg-white">
        <Breadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "services", link: "/services" },
            { name: "auditing-assurance" },
          ]}
        />
        <div className="w-[100%] h-[80%] mt-4 mb-10 flex justify-center items-center ">
          <div className="w-[80%] h-[80%] flex flex-col p-4 items-center rounded-md  ">
            <h1 className="text-3xl font-bold mb-4">
              Auditing & Assurance Services
            </h1>
            <div className=" w-full flex flex-col justify-center items-center">
              <p className=" w-[70%] text-left">
                With businesses seeking greater success on a global scale, it is
                becoming more and more important to set the right regulatory
                practices in auditing and assurance. This is where we come into
                the picture and assist you in meeting these demands with a
                thorough auditing and seamless assurance. We not just provide
                great services for you and your organization, but also give way
                to clear and transparent information, which is beneficial for
                your stakeholders and investors.
              </p>
              <ul className="list-disc pl-5 mb-4">
                {}
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
