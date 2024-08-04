import React from 'react';
import { Link } from 'react-router-dom';
import user from '../Asset/user.png'; // Replace with actual path to user images
import Breadcrumb from '../Components/Breadcrumb';

const teamMembers = [
  {
    name: 'CA Sangeeta Singh',
    qualification: 'B.Com (Hons.), FCA',
    number: '528290',
    position: 'Joint Partner – Income Tax & GST',
    mobile: '8826897211',
    email: 'sangeeta.singh@gkedia.com, sangeeta.singh@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: 'CA Kanishka Aggarwal',
    qualification: 'B.Com (Hons.), FCA',
    number: '544129',
    position: 'Deputy Partner & Chief Operating Officer',
    mobile: '8826897210',
    email: 'kanishka.aggarwal@gkedia.com, kanishka.aggarwal@gkediaandco.com',
    image: user, // Replace with actual image path
  },
  {
    name: 'CA Priyanka Jain',
    qualification: 'B.Com (Hons.), ACA',
    number: '549048',
    position: 'Executive Partner – Income Tax & GST',
    mobile: '8826897203',
    email: 'priyanka.jain@gkedia.com',
    image: user, // Replace with actual image path
  },
  {
    name: 'CA Pramod Shah',
    qualification: 'B.COM(Prog.), ACA',
    number: '526062',
    position: 'Executive Partner –Audit, Accounts & GST',
    mobile: '8826897214',
    email: 'pramod.shah@gkediaandco.com',
    image: user, // Replace with actual image path
  },
];

const Team = () => {
  return (
    <div className="w-full p-5 bg-gray-100">
        <Breadcrumb items={[{ name: 'Home', link: '/' }, { name: 'Our Team', link:'/our-team' }]} />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-6 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
              <p className="text-sm text-slate-600">{member.qualification}</p>
              <p className="text-sm text-slate-600">M. No. {member.number}</p>
              <p className="text-sm text-slate-600">{member.position}</p>
              <p className="text-sm text-slate-600">Mobile: {member.mobile}</p>
              <p className="text-sm text-slate-600">E-mail: {member.email}</p>
              <Link to="/our-team" className="mt-4 bg-slate-800 text-white py-2 px-4 rounded-md shadow hover:bg-slate-700">
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
