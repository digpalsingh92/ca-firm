import React from "react";
import { Link } from "react-router-dom";
import user from "../Asset/user.png"; // Replace with actual path to user images
import Breadcrumb from "../Components/Breadcrumb";
import OurTeam from "../Components/OurTeam";
import OurTeam2 from "../Components/OurTeam2";

const teamMembers = [
  {
    name: "Mr. Arvind Mishra",
    qualification: "B.com/CA Inter",
    // number: '528290',
    // position: ' – Income Tax & GST',
    // mobile: '8826897211',
    // email: 'sangeeta.singh@gkedia.com, sangeeta.singh@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr. Himanshu Mishra",
    qualification: "B.com / CA Inter",
    // number: '544129',
    //position: 'Deputy Partner & Chief Operating Officer',
    // mobile: '8826897210',
    // email: 'kanishka.aggarwal@gkedia.com, kanishka.aggarwal@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr. Dinesh Kumar Goswami",
    qualification: "BBA / CS Executive",
    // number: '549048',
    // position: 'Executive Partner – Income Tax & GST',
    // mobile: '8826897203',
    // email: 'priyanka.jain@gkedia.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr .Abhinav Kumar Pandey",
    qualification: "B.com/CS Professional",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr. Anup Kumar Gupta",
    qualification: "B.COM",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Ms. Shiva Bharti",
    qualification: "B.COM",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Ms. Neha Arora",
    qualification: "B.COM",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr. Bharat Singh",
    qualification: "B.com/ CA Inter",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Ms. Shobha Chauhan",
    qualification: "B.com/ MBA",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr. Vivek Tyagi",
    qualification: "B.com/M.com",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr. Ritesh Goyal",
    qualification: "B.com/CA Final",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr. Shashi Kant Singh",
    qualification: "B.com/CS Qualified",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr. Abhishek Singh",
    qualification: "B.com/CS Executive",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr. Bittu Kumar",
    qualification: "B.com/CS Executive",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr. Gaurav Bharti",
    qualification: "B.com/CS Executive",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: "Mr. Shashi Dubey",
    qualification: "B.com/CMA Inter",
    // number: '526062',
    // position: 'Executive Partner –Audit, Accounts & GST',
    // mobile: '8826897214',
    // email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
];

const Team = () => {
  return (
    <div className="w-full bg-gray-100">
      <Breadcrumb
        items={[
          { name: "Home", link: "/" },
          { name: "Our Team", link: "/our-team" },
        ]}
      />
      <div className="bg-slate-200 ">
        <OurTeam />
      </div>
      <div className="bg-slate-100" >
        <OurTeam2 />
      </div>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-6 text-center">
          Our Semi-qualified Assistants
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-slate-600">{member.qualification}</p>
              <p className="text-sm text-slate-600">M. No. {member.number}</p>
              <p className="text-sm text-slate-600">{member.position}</p>
              <p className="text-sm text-slate-600"> {member.mobile}</p>
              <p className="text-sm text-slate-600"> {member.email}</p>
              <Link
                to="/our-team"
                className="mt-4 bg-slate-800 text-white py-2 px-4 rounded-md shadow hover:bg-slate-700"
              >
                EXPLORE MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
