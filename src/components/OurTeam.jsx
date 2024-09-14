import React from "react";
import kalpana from "../Asset/kalpana_chauhan.webp";
import lalit from "../Asset/lalit_tomar.webp";
import mohit from "../Asset/mohit_tripathi.webp";
import Jitendra from "../Asset/jitendra.webp";
export default function OurTeam() {

  const teamMembers = [
    {
      name: "CA Kalpana",
      qualifications: "FCA, Certification of Concurrent Audit and Forensic Audit ,DISA, COPERATIVE SOCIATY, PGDBMA, B.Com,",
      position: "Founder",
      mobile: "9013870636",
      email: "@gmail.com",
      image: kalpana, // Replace with actual image path
    },
    {
      name: "CA Lalit",
      qualifications: "FCA, DISA, RERA, B.Com",
      position: "Founding Partner",
      mobile: "8076501471",
      email: "abc@gmail.com",
      image: lalit, // Replace with actual image path
    },
    {
      name: "CA Mohit kumar Tripathi",
      qualifications: "FCA, B.Com",
      position: "Founding Partner",
      mobile: "8826897210",
      email: "abc@gmail.com",
      image: mohit, // Replace with actual image path
    },
    {
      name: "CA Jitendra Singh Chauhan",
      qualifications: "FCA, B.Com",
      position: "Founding Partner",
      mobile: "8826897210",
      email: "abc@gmail.com",
      image: Jitendra, // Replace with actual image path
    },
    // Add more team members here
  ];

  return (
    <section className="w-full h-full bg-slate-100 ">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl text-slate-800 font-bold mb-8">
          Founding Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-[90%] max-w-3xl mx-auto bg-white rounded-lg overflow-hidden flex"
            >
              <div className="w-[40%] rounded-md flex justify-center items-center">
                <img
                  className="w-[80%] p-2 h-[90%] items-center justify-center object-cover"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
