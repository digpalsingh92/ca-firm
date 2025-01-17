import React from "react";
import logo from "../Asset/Logo.gif";

export default function HomeOverview() {
  return (
    <section className="mt-[70px] bg-slate-50 p-4">
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center w-full p-4 m-auto h-full">
        <div className="flex w-full md:w-[30%] justify-center items-center">
          <img className="shadow-sm shadow-slate-700 p-2 w-full md:w-auto" src={logo} alt="Kalpana Chauhan & Associates" />
        </div>
        <div className="w-full md:w-[60%] flex gap-4 flex-col h-full">
          <h1 className="text-xl items-center ml-2 font-semibold text-center md:text-left">Best Chartered Accountant in NCR region</h1>
          <p className="ml-2 text-center md:text-left">
            Kalpana Chauhan & Associates is a Chartered Accountancy Firm, established in 2010, led by CA Lalit Tomar and CA Kalpana Chauhan. With offices in Delhi NCR, Greater Noida, and Mumbai, the firm offers specialized services in taxation, corporate laws, company registration, legal consultancy, and more. Our mission is to provide innovative, reliable, and proactive solutions, driven by a dynamic team committed to client success. We strive to deliver high-quality corporate services, ensuring compliance with ever-changing regulations and fostering best practices in corporate governance.
          </p>
        </div>
      </div>
    </section>
  );
}
