import React from "react";
import BirdThumbnail from "../Asset/BirdThumbnail.jpg";

export default function HomeOverview() {
  return (
    <section className="mt-10 bg-slate-50 p-2">
      <div className="flex justify-center p-2 gap-10 items-center w-[70%] m-auto h-full">
        <div className="flex w-[30%] justify-center items-center">
          <img className="shadow-sm shadow-slate-700" src={BirdThumbnail} alt="Bird" />
        </div>
        <div className=" w-[60%] flex gap-4 flex-col h-full ">
          <h1 className="text-xl items-center ml-2 font-semibold">Best Chartered Accountant in NCR region</h1>
          <p className="ml-2">
          Kalpana Chauhan & Associates is a Chartered Accountancy Firm, established in 2010, led by CA Lalit Tomar and CA Kalpana Chauhan. With offices in Delhi NCR, Greater Noida, and Mumbai, the firm offers specialized services in taxation, corporate laws, company registration, legal consultancy, and more. Our mission is to provide innovative, reliable, and proactive solutions, driven by a dynamic team committed to client success. We strive to deliver high-quality corporate services, ensuring compliance with ever-changing regulations and fostering best practices in corporate governance.
          </p>
        </div>
      </div>
    </section>
  );
}
