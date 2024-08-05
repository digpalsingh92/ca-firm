import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import FoundersMessage from "../../Components/FoundersMessage";

const BulletPoints = {
  items: [
    "Import Export Code Number",
    "STPI (Software Technology Park of India) matters",
    "SEZ (Special Economic Zone) matters",
    "Membership with Export promotion council",
    "Import-Export Consultancy & Documentation",
    "Import License related matters",
  ],
};

export default function ImportExportConsultancy() {
  return (
    <section>
      <div className="w-full h-full bg-white">
        <Breadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "services", link: "/services" },
            { name: "import-export-consultancy" },
          ]}
        />
        <div className="w-[100%] h-[80%] mt-4 mb-10 flex justify-center items-center ">
          <div className="w-[80%] h-[80%] flex flex-col p-4 items-center rounded-md  ">
            <h1 className="text-3xl font-bold mb-4">
              Import and Export Consultancy
            </h1>
            <div className=" w-full flex flex-col justify-center items-center">
              <p className=" w-[70%] text-left">
                Proper management of global trade decisions is of great
                strategic significance to an organization’s supply chain. At G.
                K. Kedia & Co., our team of experts, with years of experience,
                provide the best of services in regards to import and export
                management. Whether it is the current compliance procedures in
                the Company or processes that need to be implemented, our
                overarching aim is to provide the right support and consultancy
                that can steer things in the appropriate direction.̦
              </p>
              <ul className="list-disc pl-5 mb-4">
                {BulletPoints.items.map((item, index) => {
                  return <li key={index}>{item}</li>
                })}
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
        <FoundersMessage />
      </div>
    </section>
  );
}
