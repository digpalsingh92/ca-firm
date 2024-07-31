import React from "react";
export default function OurServices() {
  return (
    <>
      <section className="w-full h-[500px] mt-10 p-5 justify-center items-center border-b-gray-900">
        <div className="w-full h-full m-2 flex items-center justify-center">
          <div className="w-[90%] h-[450px] flex flex-col justify-center items-center">
            <div className="w-full h-[50px] flex items-center justify-center">
              <span className="text-3xl text-slate-800 font-bold">
                Services we Offer
              </span>
            </div>
            <div className="w-full h-[400px] gap-3 flex flex-row justify-center items-center">
              <div className="w-[30%] h-[280px] box-border shadow-lg shadow-slate-400 rounded-md flex justify-center items-center hover:shadow-lg hover:shadow-slate-300 hover:bg-teal-300 hover:text-white transition duration-300">
                <div className="w-full flex gap-3 flex-col items-center">
                  <div className="w-full h-full flex flex-col gap-3 justify-center items-center mt-3">
                    <span className="text-xl font-bold text-slate-800 flex flex-col justify-center items-center">
                      Goods & Service Tax (GST) Filing
                    </span>
                    <div className="flex flex-col justify-center items-center mx-5 hover:text-white">
                      <p className="text-lg font-light text-start text-slate-800 ">
                        The GST journey in India began in the year 2000, and
                        since then, has come a long way in shaping...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[30%] h-[280px] box-border shadow-lg shadow-slate-400 rounded-md flex justify-center items-center hover:shadow-lg hover:shadow-slate-300 hover:bg-teal-300 hover:text-white transition duration-300">
                <div className="w-full flex gap-3 flex-col items-center">
                  <div className="w-full h-full flex flex-col gap-3 justify-center items-center mt-3">
                    <span className="text-xl font-bold text-slate-800 flex flex-col justify-center items-center">
                      Goods & Service Tax (GST) Filing
                    </span>
                    <div className="flex flex-col justify-center items-center mx-5 hover:text-white">
                      <p className="text-lg font-light text-start text-slate-800 ">
                        The GST journey in India began in the year 2000, and
                        since then, has come a long way in shaping...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[30%] h-[280px] box-border shadow-lg shadow-slate-400 rounded-md flex justify-center items-center hover:shadow-lg hover:shadow-slate-300 hover:bg-teal-300 hover:text-white transition duration-300">
                <div className="w-full flex gap-3 flex-col items-center">
                  <div className="w-full h-full flex flex-col gap-3 justify-center items-center mt-3">
                    <span className="text-xl font-bold text-slate-800 flex flex-col justify-center items-center">
                      Goods & Service Tax (GST) Filing
                    </span>
                    <div className="flex flex-col justify-center items-center mx-5 hover:text-white">
                      <p className="text-lg font-light text-start text-slate-800 ">
                        The GST journey in India began in the year 2000, and
                        since then, has come a long way in shaping...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-[10%] h-[50px] bg-teal-300 rounded-lg text-xl font-normal hover:bg-teal-400 hover:w-[11%] hover:font-semibold">
              More Details
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
