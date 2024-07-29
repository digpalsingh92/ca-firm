import React from "react";
import user from "../Asset/user.png";
import { LuWallet } from "react-icons/lu";

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
              <div className="w-[30%] h-[300px] box-border shadow-lg shadow-slate-400 flex justify-center hover:shadow-lg hover:shadow-slate-800">
                <div className="w-[90%] h-[10] items-center flex gap-3 flex-col">
                  <div className="w-full h-full justify-center items-center flex mt-3 flex-col gap-3">
                      <span className="text-xl flex flex-col justify-center items-center font-bold text-slate-800">
                        GST Filling
                      </span>
                      <div className=" flex flex-col justify-center items-center ">
                        <p className="text-lg w-full font-light text-slate-800">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Animi maxime praesentium perspiciatis
                          perferendis quos obcaecati vitae, dolor ullam
                          necessitatibus eos, ratione cum sint sunt facilis quas
                          voluptates magni nobis rem.
                        </p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="w-[30%] h-[300px] box-border shadow-lg shadow-slate-400 flex justify-center hover:shadow-lg hover:shadow-slate-800">
                <div className="w-[90%] h-[10] items-center flex gap-3 flex-col">
                  <div className="w-full h-full justify-center items-center flex mt-3 flex-col gap-3">
                    <span className="text-xl flex flex-col justify-center items-center font-bold text-slate-800">
                      Income Tax Returns
                    </span>
                    <div className=" flex flex-col justify-center items-center ">
                      <p className="text-lg w-full font-light text-slate-800">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Animi maxime praesentium perspiciatis perferendis
                        quos obcaecati vitae, dolor ullam necessitatibus eos,
                        ratione cum sint sunt facilis quas voluptates magni
                        nobis rem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[30%] h-[300px] box-border shadow-lg shadow-slate-400 flex justify-center hover:shadow-lg hover:shadow-slate-800">
                <div className="w-[90%] h-[10] items-center flex gap-3 flex-col">
                  <div className="w-full h-full justify-center items-center flex mt-3 flex-col gap-3">
                    <span className="text-xl flex flex-col justify-center items-center font-bold text-slate-800">
                      GST Registration and GST Filings
                    </span>
                    <div className=" flex flex-col justify-center items-center ">
                      <p className="text-lg w-full font-light text-slate-800">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Animi maxime praesentium perspiciatis perferendis
                        quos obcaecati vitae, dolor ullam necessitatibus eos,
                        ratione cum sint sunt facilis quas voluptates magni
                        nobis rem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-[10%] h-[50px] bg-teal-300 rounded-lg text-xl font-normal hover:bg-teal-400 hover:w-[11%] hover:font-semibold"> More Details</button>
          </div>
        </div>
      </section>
    </>
  );
}
