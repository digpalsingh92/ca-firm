import React from "react";
import user from "../Asset/user.png";
export default function OurTeam() {
  return (
    <>
      <section className="w-full h-[500px] mt-7 p-5 justify-center items-center border-b-gray-900">
        <div className="w-full h-full m-2 flex items-center justify-center">
          <div className="w-[90%] h-[500px] flex gap-4 p-3 flex-col justify-center items-center">
            <div className="w-full h-[50px] flex items-center justify-center">
              <span className="text-4xl text-slate-800 font-bold">Meet Our Team</span>
            </div>
            <div className="w-full h-[450px] gap-[35px] flex flex-row justify-center items-center">
              <div className="w-[25%] box-border shadow-md shadow-slate-300 h-[410px] flex justify-center hover:shadow-lg hover:shadow-slate-800">
                <div className="w-[250px] h-[100px] items-center rounded-[50%] flex gap-3 flex-col">
                  <img className="mt-2 flex justify-center items-center w-[170px]" src={user} />
                  <div className="w-full h-full flex mt-3 flex-col gap-3">
                    <span className="text-xl flex flex-col justify-center items-center font-bold text-slate-800">Name</span>
                    <div className=" flex flex-col justify-center items-center "><p className="text-md w-full font-light text-slate-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi maxime praesentium perspiciatis perferendis quos obcaecati vitae, dolor ullam necessitatibus eos, ratione cum sint sunt facilis quas voluptates magni nobis rem.</p></div>
                  </div>
                </div>
              </div>
              <div className="w-[25%] box-border shadow-md shadow-slate-300 h-[410px] flex justify-center hover:shadow-lg hover:shadow-slate-800">
                <div className="w-[250px] h-[100px] items-center rounded-[50%] flex gap-3 flex-col">
                  <img className="mt-2 flex justify-center items-center w-[170px]" src={user} />
                  <div className="w-full h-full flex mt-3 flex-col gap-3">
                    <span className="text-xl flex flex-col justify-center items-center font-bold text-slate-800">Name</span>
                    <div className=" flex flex-col justify-center items-center "><p className="text-md w-full font-light text-slate-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi maxime praesentium perspiciatis perferendis quos obcaecati vitae, dolor ullam necessitatibus eos, ratione cum sint sunt facilis quas voluptates magni nobis rem.</p></div>
                  </div>
                </div>
              </div>
              <div className="w-[25%] box-border shadow-md shadow-slate-300 h-[410px] flex justify-center hover:shadow-lg hover:shadow-slate-800">
                <div className="w-[250px] h-[100px] items-center rounded-[50%] flex gap-3 flex-col">
                  <img className="mt-2 flex justify-center items-center w-[170px]" src={user} />
                  <div className="w-full h-full flex mt-3 flex-col gap-3">
                    <span className="text-xl flex flex-col justify-center items-center font-bold text-slate-800">Name</span>
                    <div className=" flex flex-col justify-center items-center "><p className="text-md w-full font-light text-slate-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi maxime praesentium perspiciatis perferendis quos obcaecati vitae, dolor ullam necessitatibus eos, ratione cum sint sunt facilis quas voluptates magni nobis rem.</p></div>
                  </div>
                </div>
              </div>
              <div className="w-[25%] box-border shadow-md shadow-slate-300 h-[410px] flex justify-center hover:shadow-lg hover:shadow-slate-800">
                <div className="w-[250px] h-[100px] items-center rounded-[50%] flex gap-3 flex-col">
                  <img className="mt-2 flex justify-center items-center w-[170px]" src={user} />
                  <div className="w-full h-full flex mt-3 flex-col gap-3">
                    <span className="text-xl flex flex-col justify-center items-center font-bold text-slate-800">Name</span>
                    <div className=" flex flex-col justify-center items-center "><p className="text-md w-full font-light text-slate-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi maxime praesentium perspiciatis perferendis quos obcaecati vitae, dolor ullam necessitatibus eos, ratione cum sint sunt facilis quas voluptates magni nobis rem.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
