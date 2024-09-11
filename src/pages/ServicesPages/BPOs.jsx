import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import FoundersMessage from "../../components/FoundersMessage";

export default function BPOs() {
  return (
    <section>
      <div className="w-full h-full bg-white">
        <Breadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "services", link: "/services" },
            { name: "bpo" },
          ]}
        />
        <div className="w-[100%] h-[80%] mt-4 mb-10 flex justify-center items-center ">
          <div className="w-[80%] h-[80%] flex flex-col p-4 items-center rounded-md  ">
            <h1 className="text-3xl font-bold mb-4">
              Business Process Outsources (BPO)
            </h1>
            <div className=" w-full flex flex-col justify-center items-center">
              <p className=" w-[70%] text-left">
                Outsourcing has gone through so many reforms in the last couple
                of decades and has given way to a whole new economic landscape
                in India. <strong> Kaplana Chauhan & Associates,</strong> we help our clients and empower
                their outsourcing businesses with new age digital tools and
                processes that help them move forward in accomplishing their
                goals. We believe in modernizing the shared service operations
                through robust budgeting, management reporting, and treasury.
                Get in touch with us Now, to see how we can help you with your
                BPO venture and business.
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  Book Keeping and Accounting for Individuals, Firms, NGOs and
                  Companies including foreign Companies
                </li>
                <li>Design, implementation and review of accounting manual</li>
                <li>Advice on various Accounting Standards, Ind AS & IFRS</li>
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
