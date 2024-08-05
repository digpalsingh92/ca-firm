import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import FoundersMessage from "../../Components/FoundersMessage";
export default function Accounting() {
  return (
    <section >
      <div className="w-full h-full bg-white">
      <Breadcrumb
        items={[
          { name: "Home", link: "/" },
          { name: "services", link: "/services" },
          { name: "accounting" },
        ]}
      />
      <div className="w-[100%] h-[80%] mt-4 mb-10 flex justify-center items-center ">
        <div className="w-[80%] h-[80%] flex flex-col p-4 items-center rounded-md  ">
          <h1 className="text-3xl font-bold mb-4">
            Accounting and Bookkeeping Services
          </h1>
          <div className=" w-full flex flex-col justify-center items-center">
            <p className=" w-[70%] text-left">
              The history of accounting goes back a 1000 years, but the
              relevance of it still stays strong, today! Keeping up with the
              multiple aspects of a business can be difficult, and that is why
              we are here to offer bookkeeping, succession planning and
              strategic planning, so that you can focus on other important
              matters and not worry about the financial accounting of your
              organization.
              <br />
              An accountant is responsible for offering strategic financial
              advice in addition to being aware of the company's financial
              situation. Bookkeeping services is the process of keeping records
              of financial transactions and preparing financial statements, such
              as balance sheets and income statements
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Book Keeping and Accounting for Individuals, Firms, NGOs and
                Companies including foreign Companies
              </li>
              <li>Design, implementation and review of accounting manual</li>
              <li>Advice on various Accounting Standards, Ind AS & IFRS</li>
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
