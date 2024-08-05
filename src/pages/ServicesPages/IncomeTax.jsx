  import React from 'react'
  import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import FoundersMessage from "../../Components/FoundersMessage";
  
  export default function IncomeTax() {
    return (
      <section >
      <div className="w-full h-full bg-white">
      <Breadcrumb
        items={[
          { name: "Home", link: "/" },
          { name: "services", link: "/services" },
          { name: "income-tax" },
        ]}
      />
      <div className="w-[100%] h-[80%] mt-4 mb-10 flex justify-center items-center ">
        <div className="w-[80%] h-[80%] flex flex-col p-4 items-center rounded-md  ">
          <h1 className="text-3xl font-bold mb-4">
          Income Tax Consultants
          </h1>
          <div className=" w-full flex flex-col justify-center items-center">
            <p className=" w-[70%] text-left">
            The tax landscapes have changed a great deal over the years, and the complexity of change in the tax scenario continues to grow at a fast pace. This change in the corporate and private space has brought about a greater shift in the way Tax authorities work, and therefore it is necessary to have the right procedures in place when it comes to taxes. Our trained Chartered Accountants provide easy and hassle free ways to help manage tax compliances.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
              Survey, Search & Seizer Consultancy
              </li>
              <li>Appearance before Investigation Wing of Income Tax Department (Section 153A to 153C cases)</li>
              <li>Appearance before Central Board of Direct Taxes (CBDT) and before Ministry of Finance</li>
              <li>Transfer Pricing matters-TP Study, TP Audit, TP Assessment & Objections with DRP</li>
              <li>Tax Evasion Petitions, CPGRAMS, raising grievances for long pending matters</li>
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
    )
  }
  