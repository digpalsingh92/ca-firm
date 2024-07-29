import { Link } from "react-router-dom";
import Logo from "../Asset/logo.png";

export default function Navbar() {
  return (
      <nav className="flex flex-row h-[60px] z-[1000] items-center bg-slate-200">
        <div className="flex w-[20%] items-center mr-auto">
          <span className="font-semibold text-xl">
            <img className="w-[180px] h-[60px] rounded-[50%]" src={Logo} />
          </span>
        </div>
        <div className="w-full mr-8 flex justify-end">
          <div className="text-sm flex flex-row p-3">
            <Link
              to="/"
              className="flex p-3 text-[20px] font-bold text-slate-800 mr-4 "
            >
              Home
            </Link>
            <Link
              to="/about"
              className="flex text-[20px] p-3 font-bold text-slate-800 mr-4"
            >
              About
            </Link>
            <Link
              to="/services"
              className="flex text-[20px] p-3 font-bold text-slate-800 mr-4"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="flex p-3 font-bold text-[20px] text-slate-800 mr-4"
            >
              Contact us
            </Link>
            <Link
              to="/contact"
              className="flex p-3 font-bold text-[20px] text-slate-800 mr-4"
            >
              Career
            </Link>
            <Link
              to="/contact"
              className="flex p-3 font-bold text-[20px] text-slate-800 mr-4"
            >
              FAQs
            </Link>
          </div>
        </div>
      </nav>
  );
}
