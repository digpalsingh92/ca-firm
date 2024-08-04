import React from "react";
import { Link } from "react-router-dom";

export default function OurServices() {
  return (
    <>
      <section className="w-full h-[500px] mt-10 p-5 justify-center items-center bg-slate-100">
        <div className="w-full h-full m-2 flex items-center justify-center">
          <div className="w-[90%] h-[450px] flex flex-col justify-center items-center">
            <div className="w-full h-[50px] flex items-center justify-center">
              <span className="text-3xl text-slate-800 font-bold">
                Services we Offer
              </span>
            </div>
            <div className="w-full h-[400px] gap-3 flex flex-row justify-center items-center">
              {[
                "Goods & Service Tax (GST) Filing",
                "Income Tax Return Filing",
                "Company Incorporation",
              ].map((service, index) => (
                <div
                  key={index}
                  className="w-[30%] h-[280px] box-border shadow-lg shadow-slate-400 rounded-md flex justify-center items-center transition duration-300 group hover:bg-teal-600 hover:h-[300px]"
                >
                  <div className="w-full flex gap-3 flex-col items-center">
                    <div className="w-full h-full flex flex-col gap-3 justify-center items-center mt-3">
                      <span className="text-xl font-bold text-slate-800 group-hover:text-white flex flex-col justify-center items-center">
                        {service}
                      </span>
                      <div className="flex flex-col justify-center items-center mx-5">
                        <p className="text-lg font-light text-start text-slate-800 group-hover:text-white">
                          The GST journey in India began in the year 2000, and
                          since then, has come a long way in shaping...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-[11%] h-[60px] bg-slate-200 rounded-lg text-xl font-medium transition duration-300 hover:bg-teal-600 hover:ease-out hover:font-semibold hover:text-slate-100">
            <Link to="/services">
              More Details
            </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
