import React from "react";
import { Link } from "react-router-dom";
import FoundersMessage from "../../components/FoundersMessage";
import startup from "../../Asset/startup.webp";
import WhyUsSection from "../../components/WhyUsSection";

const BulletPoints = {
  items: [
  "Assistance in identifying the right business structure",
  "Obtaining Business licenses",
  "Incorporation of Company and LLP (Limited Liability Partnership)",
  "Setting up Policies and Procedures",
  "Book Keeping & Accountancy Services",
  "GST Compliances, ROC Compliances",
  "TDS Compliances, Payroll Services",
  "Pricing, Cash flow analysis",
  "Preparation and Filing of Income Tax Return",
  "Audit support and preparation",
  ]
}

export default function StartupServices() {
  return (
    <section>
      <div className="w-full h-full bg-white">
        <div className="w-[90%] h-[100%] mx-auto flex justify-center items-center ">
        <div className="w-[30%] h-[30%] rounded-md  my-4 flex flex-col py-4 items-center">
              <img
                className="w-[90%] h-[90%] rounded-md relative flex ml-4 items-center justify-center"
                src={startup}
                alt="Startup Services image"
              />
            </div>
          <div className="w-[90%] h-[100%] flex flex-col p-4 items-center rounded-md  ">
            <h1 className="text-3xl font-bold mb-4">
              Startup Services
            </h1>
            <div className=" w-full flex flex-col justify-center items-center">
              <p className=" w-[70%] text-left">
                Startup Services in India takes a lot of confidence and grit and
                we are here to back you up with the right financial advice and
                road map. Your ultimate goal while opening any startup is to
                reap maximum profit and that is what our services help you
                achieve. Time is money and no one understands that better than
                us! Get started on the right path with your startup and let us
                fuel your dreams and aspirations with the best of financial
                services.
              </p>
              <ul className="list-disc pl-5 mb-4">
               
               {BulletPoints.items.map((item, index) => (
                  <li key={index}> {item}</li>
               ))
              }  
              </ul>
            </div>
            <Link
              to={`/contact`}
              className="mt-4 mb-4 inline-block h-[9%] w-[12%] items-center bg-slate-800 text-white py-2 px-4 rounded-md shadow hover:bg-teal-600"
            >
              Enquire Now
            </Link>
          </div>
        </div>
        <WhyUsSection />
        <FoundersMessage />
      </div>
    </section>
  );
}
