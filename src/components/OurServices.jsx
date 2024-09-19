import React from "react";
import { Link } from "react-router-dom";
import gst from "../Asset/gst.webp";
import IncomeTax from "../Asset/income-tax.webp";
import CompanyLaw from "../Asset/company-law.webp";
import Finance from "../Asset/finance.webp";
import Taxation from "../Asset/income-tax.webp";
import Payroll from "../Asset/payroll-process.webp";

const services =[
  {
    name : "Goods & Service Tax (GST)",
    description: "The GST journey in India began in the year 2017, and since then, it has come a long way in shaping our economy. All matters like registration, form filing, application for refund, etc. ",
    img: gst,
  },
  {
    name : "Income Tax Return Filing",
    description: "Income Tax Return Filing is a process of filing the details of your income and tax paid to the government for a particular financial year. ",
    img: IncomeTax,
  },
  {
    name : "Company Law Matters Consultancy",
    description: "Company Law Matters Consultancy is a service that helps businesses comply with the Companies Act, 2013, and other related laws. ",
    img: CompanyLaw,
  },
  {
    name : "Finance Services",
    description: "Finance Services are services that help businesses manage their finances effectively. ",
    img: Finance,
  },
  {
    name : "Taxation Services",
    description: "Taxation Services are services that help businesses comply with tax laws and regulations. ",
    img: Taxation,
  },
  {
    name: "Payroll Services",
    description: "Payroll Services are services that help businesses manage their payroll effectively. ",
    img: Payroll,
  }
]

export default function OurServices() {
  return (
    <>
      <section className="w-full mt-10 p-5 justify-center items-center bg-slate-50">
        <div className="w-full h-full m-2 flex items-center justify-center">
          <div className="w-full max-w-6xl flex flex-col justify-center items-center">
            <div className="w-full flex items-center justify-center mb-5">
              <span className="text-3xl text-slate-800 font-bold">
                Services we Offer
              </span>
            </div>
            <div className="w-full flex flex-wrap gap-5 justify-center items-center">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full md:w-[30%] h-[280px] box-border shadow-md shadow-slate-400 rounded-md flex justify-center items-center transition duration-300 group hover:bg-teal-600 hover:h-[300px] p-4"
                >
                  <div className="w-full flex gap-3 flex-col items-center">
                    <div className="w-full h-full flex flex-col gap-3 justify-center items-center mt-3">
                      <img
                        src={service.img}
                        className="w-[120px] h-[120px] rounded-full"/>
                      <span className="text-xl font-bold text-slate-800 group-hover:text-white text-center">
                        {service.name}
                      </span>
                      <p className="text-center w-[70] text-sm text-slate-600 group-hover:text-white">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-[75%] md:w-[13%] h-[60px] bg-slate-200 rounded-lg text-xl font-medium transition duration-300 hover:bg-teal-600 hover:ease-out hover:font-semibold hover:text-slate-100">
              <Link to="/services">More Details</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
