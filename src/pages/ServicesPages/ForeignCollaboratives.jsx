import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import FoundersMessage from "../../Components/FoundersMessage";

const BulletPoints = {
  items: [
  "FEMA related consultancy",
  "FDI (Foreign Direct Investment) related matters & consultancy",
  "Filing of FIRMS & FC-GPR Forms with RBI",
  "Filing of FLA (Foreign Liabilities & Assets) Return with RBI",
  "ECB (External Commercial Borrowing) related matters & consultancy",
  "ODI (Overseas Direct Investment) related matters & consultancy",
  "NRI & PIO related matters & consultancy",
  "All types of Reserve Bank of India approval",
  "Formation of Liaison office, Project Office & Branch Office",
  "Wholly owned subsidiary and a joint venture in India",
  "Assistance in setting up Permanent Establishment (PE)",
  "Branch Office in Special Economic Zone",
  "Foreign Trade Policy Assistance",
  "Inbound and Outbound Investment Strategies",
  "Approval from Ministry of Finance",
  "Assistance in drafting of foreign collaboration agreements",
  "Advisory on change/ exit in existing Business model.",
  "Advisory on Outbound Structuring as the choice of appropriate jurisdiction, structuring of investment etc.",
  "Registration of Non-Banking Finance Companies (NBFC) with Reserve Bank of India"
    ],
};

export default function ForeignCollaboratives() {
  return (
    <section>
      <div className="w-full h-full bg-white">
        <Breadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "services", link: "/services" },
            { name: "foreign-collaborations-services" },
          ]}
        />
        <div className="w-[100%] h-[80%] mt-4 mb-10 flex justify-center items-center ">
          <div className="w-[80%] h-[80%] flex flex-col p-4 items-center rounded-md  ">
            <h1 className="text-3xl font-bold mb-4">
            Foreign Collaborations Services
            </h1>
            <div className=" w-full flex flex-col justify-center items-center">
              <p className=" w-[70%] text-left">
                Our purpose is in sync with the Government’s overall vision,
                where we facilitate external trade and payments and promote
                orderly development and maintenance of the foreign exchange
                market in India. Observing the current global scenario is
                important while analyzing the market, and taking certain risk
                factors into account are also pivotal, as they help is providing
                the right course of action for foreign exchange management.
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
        <FoundersMessage />
      </div>
    </section>
  );
}
