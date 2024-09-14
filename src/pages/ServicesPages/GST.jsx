import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import FoundersMessage from "../../components/FoundersMessage";
import gstImage from "../../Asset/gst.webp";
import WhyUsSection from "../../components/WhyUsSection";

const BulletPoints = {
  items: [
    "Filing of monthly, quarterly and Annual GST returns",
    "Assistance in deposit of GST to electronic cash ledger",
    "Consultancy on GST on regular basis",
    "Refund of GST from GST Department",
    "Bond and Letter of Undertaking (LUT) related work for Exporters",
    "Assisting in Internal Audit by GST Department",
    "Assisting and Representation in Show Cause Notice issued by Superintendent, GST Audit Department",
    "Search Cases under GST",
    "Contract review from GST perspective",
    "Representation before relevant authority for GST appeal i.e. Commissioner, CESTAT",
  ],
};
export default function GST() {
  return (
    <section>
      <div className="w-full h-full bg-white">
        <Breadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "services", link: "/services" },
            { name: "gst" },
          ]}
        />
        <div className="w-[100%] h-[80%] mx-auto flex justify-center items-center ">
        <div className="w-[30%] h-[30%] ml-5 flex flex-col p-4 items-center rounded-md">
              <img
                className="w-[90%] h-[90%] rounded-md flex ml-4 items-center justify-center"
                src={gstImage}
              />
            </div>
          <div className="w-[100%] h-[80%] flex flex-col p-4 items-center rounded-md  ">
            <h1 className="text-3xl font-bold mb-4">
              Goods & Services Tax (GST) Consultants
            </h1>
            <div className=" w-full flex flex-col justify-center items-center">
              <p className=" w-[70%] text-left">
                The GST journey in India began in the year 2017, and since then,
                it has come a long way in shaping our economy. All matters like
                registration, form filing, application for refund, etc. are
                taken care of by our skilled and efficient Chartered
                Accountants. It is our sole purpose and duty to take part in and
                to give way to a robust and open discussion surrounding
                accountable GST, increased transparency and the ensuring of
                taxation in an increasingly digitized and globalized world.
              </p>
              <ul className="list-disc pl-5 mb-4">
                {BulletPoints.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
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
        <WhyUsSection />
        <FoundersMessage />
      </div>
    </section>
  );
}
