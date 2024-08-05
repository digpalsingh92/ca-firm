import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import FoundersMessage from "../../Components/FoundersMessage";

const BulletPoints = {
  items: [
    "Preparation of project report",
    "Preparation of CMA Data",
    "Valuation of Business",
    "Due diligence for finance",
    "Loan arrangement- Cash credit limit, Term loan & Project loan",
  ],
};

export default function Finance() {
  return (
    <section>
      <div className="w-full h-full bg-white">
        <Breadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "services", link: "/services" },
            { name: "finance" },
          ]}
        />
        <div className="w-[100%] h-[80%] mt-4 mb-10 flex justify-center items-center ">
          <div className="w-[80%] h-[80%] flex flex-col p-4 items-center rounded-md  ">
            <h1 className="text-3xl font-bold mb-4">Finance Services</h1>
            <div className=" w-full flex flex-col justify-center items-center">
              <p className=" w-[70%] text-left">
                At G. K. Kedia & Co. we focus on the future of finance, the
                evolving market trends, and how this goes into shaping every
                venture, big or small. Working with clients, giving a uniformed
                structure to their business goals and helping them execute their
                plans in an effective way is what sets us apart from other
                Chartered Accountant Firms. Whether it’s data, technology or
                analytics, we do it all with a quick turnaround time.
              </p>
              <ul className="list-disc pl-5 mb-4">
                {BulletPoints.items.map((item, index) => (
                  <li key={index}> {item}</li>
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
