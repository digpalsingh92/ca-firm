import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-6 p-5 rounded-t-md text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4 text-teal-500">Kalpana Chauhan & Associates</h2>
          <p className="text-sm">
            We are a full-service Chartered Accountancy Firm serving clients located in India. We are located
            in the Delhi / NCR region of Delhi, Noida & Gurugram.
          </p>
        </div>
        <div>
          <h2 className="text-lg text-teal-600 font-bold mb-4">Our Services</h2>
          <ul className="text-sm space-y-2">
            {[
              'Audit & Assurance Services',
              'GST Services',
              'Income Tax',
              'Business Setup Services',
              'Business Registrations',
              'International Taxation',
              'NGO Services',
              'Finance Services',
              'Outsourcing Services',
            ].map((service, index) => (
              <li key={index} className='text-slate-300 font-medium hover:text-teal-500 cursor-pointer'>
               <Link to="/services"> {service}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg text-teal-600 font-bold mb-4">Our Locations</h2>
          <div className="mb-4">
            <h3 className="text-md font-semibold">Noida</h3>
            <p className="text-sm">
              B-077, 7th Floor, ATS Bouquet,<br />
              A2/2, Sector 132, Noida,<br />
              (U.P) - 201304<br />
              on Noida-Greater Noida Expressway
            </p>
          </div>
          <h3 className="text-md font-semibold text-teal-600">Working Hours</h3>
          <p className="text-sm">Mon - Sat 9:00AM - 6:00PM IST</p>
        </div>
        <div>
          <h2 className="text-lg text-teal-600 font-bold mb-4">Contact Us</h2>
          <p className="text-sm mb-4">
            <span className="block">Call: +91 - 9013870636</span>
            <span className="block">Email: contact@kcataxcare.com </span>
          </p>
          <h2 className="text-lg text-teal-600 font-bold mb-4">Stay in Touch</h2>
          <div className="flex space-x-4">
            <Link to="#" className="text-slate-400 hover:text-teal-500">
            <span className='flex flex-col justify-center items-center'> <FaFacebookSquare/> Facebook</span> 
            </Link>
            <Link to="#" className="text-slate-400 hover:text-teal-500">
            <span className='flex flex-col justify-center items-center'> <FaSquareXTwitter/> Twitter</span> 
            </Link>
            <Link to="#" className="text-slate-400 hover:text-teal-500">
            <span className='flex flex-col justify-center items-center'> <FaLinkedin/> Linkedin</span> 
            </Link>
            <Link to="#" className="text-slate-400 hover:text-teal-500">
             <span className='flex flex-col justify-center items-center'> <FaYoutube/> YouTube</span> 
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-sm text-teal-500 mt-10 text-center border-t border-gray-700 pt-6">
        <p>&copy; 2024 Kalpana Chauhan & Associates. All rights reserved.</p>
        <p>All material presented herein is intended for information purposes only.</p>
        <div className="mt-4">
          <Link to="#" className="text-gray-400 hover:text-teal-500 mx-2">Privacy Policy</Link>
          <span className="mx-1 text-lg">|</span>
          <Link to="#" className="text-gray-400 hover:text-teal-500 mx-2">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
