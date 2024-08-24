import React from "react";
import { Link } from "react-router-dom";

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
            <div className="w-full flex flex-wrap gap-3 justify-center items-center">
              {[
                "Goods & Service Tax (GST) Filing",
                "Income Tax Return Filing",
                "Company Law Matters Consultancy",
              ].map((service, index) => (
                <div
                  key={index}
                  className="w-full md:w-[30%] h-[280px] box-border shadow-lg shadow-slate-400 rounded-md flex justify-center items-center transition duration-300 group hover:bg-teal-600 hover:h-[300px] p-4"
                >
                  <div className="w-full flex gap-3 flex-col items-center">
                    <div className="w-full h-full flex flex-col gap-3 justify-center items-center mt-3">
                      <span className="text-xl font-bold text-slate-800 group-hover:text-white text-center">
                        {service}
                      </span>
                      {/* <div className="flex flex-col justify-center items-center mx-5">
                        {[
                          "Income Tax Return (ITR) is a form that an individual submits to the Income Tax Department of India to file information about his income and taxes payable during that year.",
                          "The GST journey in India began in the year 2000, and since then, has come a long way in shaping...",
                          "The Companies Act, 2013, is an Act of the Parliament of India which regulates incorporation of companies, responsibilities of companies, directors, dissolution of companies, etc.",
                        ].map((desc, index) => (
                          <p
                            key={index}
                            className="text-lg font-light text-center text-slate-800 group-hover:text-white truncate"
                          >
                            {desc}
                          </p>
                        ))}
                      </div> */}
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
