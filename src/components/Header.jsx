import React from "react";
import Navbar from "./Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



export default function Header() {
  return (
    <header className=" m-auto block absolute w-full text-white">
      <div className="h-[50px] bg-slate-600 justify-between flex flex-row relative">
        <div className="flex items-center">
          <span className=" flex items-center text-slate-200 gap-2 text-lg">
            <FaLocationDot className="text-teal-400" />
            B-9, Second Floor, Mahalaxmi Nagar
          </span>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <span className=" flex items-center gap-2 text-lg  text-slate-200 "><FaPhoneAlt className="text-teal-400"/>+91 81301 25321</span>
          <span className=" flex items-center gap-2 text-lg  text-slate-200 "><MdEmail className="text-teal-400"/>digpalsingh18901@gmail.com</span>
          <FaSquareXTwitter className="text-teal-400"/>
          <FaFacebookSquare className="text-teal-400"/>
          <FaLinkedin className="text-teal-400"/>
        </div>
      </div>
    </header>
  );
}
