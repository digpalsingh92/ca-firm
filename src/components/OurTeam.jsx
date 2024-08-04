import React from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../Asset/user.png"; // Replace with actual image paths

export default function OurTeam() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("#");
  };

  const teamMembers = [
    {
      name: "CA Kalpana",
      qualifications: "CA",
      mNo: "M. No. 000001",
      position: "Founder",
      mobile: "8826897211",
      email: "abc@gmail.com",
      image: user, // Replace with actual image path
    },
    {
      name: "CA Lalit",
      qualifications: "CA",
      mNo: "M. No. 000002",
      position: "Founding Partner",
      mobile: "8826897210",
      email: "abc@gmail.com",
      image: user, // Replace with actual image path
    },
    // Add more team members here
  ];

  return (
    <section className="w-full mt-10 p-5">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl text-slate-800 font-bold mb-8">
          Founding Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-[90%] max-w-3xl mx-auto shadow-md shadow-teal-100 rounded-lg overflow-hidden flex"
              onClick={handleClick}
            >
              <div className="w-[40%] flex justify-center items-center">
                <img
                  className="w-[90%] p-2 h-auto object-cover"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="w-[60%] p-5 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-800">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {member.qualifications}
                </p>
                <p className="text-sm text-slate-600 mt-1">{member.mNo}</p>
                <p className="text-sm text-slate-600 mt-1">{member.position}</p>
                <p className="text-sm text-slate-600 mt-1">
                  Mobile: {member.mobile}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  E-mail: {member.email}
                </p>
                <button className="mt-4 py-2 px-3 w-[60%] bg-slate-800 text-white rounded hover:bg-slate-900 transition duration-200">
                  <Link to="#">
                  Explore More
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
