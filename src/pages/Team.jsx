import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import OurTeam from "../components/OurTeam";
import OurTeam2 from "../components/OurTeam2";

const teamMembers = [
  {
    name: "Mr. Arvind Mishra",
    qualification: "B.com/CA Inter",
  },
  {
    name: "Mr. Himanshu Mishra",
    qualification: "B.com / CA Inter",
  },
  {
    name: "Mr. Dinesh Kumar Goswami",
    qualification: "BBA / CS Executive",
  },
  {
    name: "Mr. Abhinav Kumar Pandey",
    qualification: "B.com/CS Professional",
  },
  {
    name: "Mr. Anup Kumar Gupta",
    qualification: "B.COM",
  },
  {
    name: "Ms. Shiva Bharti",
    qualification: "B.COM",
  },
  {
    name: "Ms. Neha Arora",
    qualification: "B.COM",
  },
  {
    name: "Mr. Bharat Singh",
    qualification: "B.com/ CA Inter",
  },
  {
    name: "Ms. Shobha Chauhan",
    qualification: "B.com/ MBA",
  },
  {
    name: "Mr. Vivek Tyagi",
    qualification: "B.com/M.com",
  },
  {
    name: "Mr. Ritesh Goyal",
    qualification: "B.com/CA Final",
  },
  {
    name: "Mr. Shashi Kant Singh",
    qualification: "B.com/CS Qualified",
  },
  {
    name: "Mr. Abhishek Singh",
    qualification: "B.com/CS Executive",
  },
  {
    name: "Mr. Bittu Kumar",
    qualification: "B.com/CS Executive",
  },
  {
    name: "Mr. Gaurav Bharti",
    qualification: "B.com/CS Executive",
  },
  {
    name: "Mr. Shashi Dubey",
    qualification: "B.com/CMA Inter",
  },
];

const Team = () => {
  return (
    <div className="w-full bg-gray-100">
      <Breadcrumb
        items={[
          { name: "Home", link: "/" },
          { name: "Our Team" },
        ]}
      />
      <div className="container mx-auto p-4">
        <div className=" mb-5">
          <OurTeam/>
          <OurTeam2/>
        </div>
        <h1 className="text-4xl font-bold text-slate-800 mb-6 text-center">
          Our Semi-qualified Assistants
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-200 uppercase bg-teal-500">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Qualification
                </th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, index) => (
                <tr
                  key={index}
                  className="bg-slate-100 border-b hover:bg-slate-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {member.name}
                  </td>
                  <td className="px-6 text-gray-900 py-4">{member.qualification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Team;
