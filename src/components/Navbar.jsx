import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Asset/Logo.gif";
import { ChevronRight, ChevronRightIcon } from "lucide-react";

const navItems = [
  { name: "Home" },
  {
    name: "About",
    submenu: [{ name: "Overview", url: "overview" }],
  },
  {
    name: "Services",
    submenu: [
      { name: "Accounting", url: "accounting" },
      { name: "Auditing & Assurance", url: "auditing-assurance" },
      { name: "Income Tax", url: "income-tax" },
      { name: "Goods & Services Tax (GST)", url: "gst" },
      { name: "Company Law Matters Consultancy", url: "company-law-matters" },
      { name: "Societies and Trust (NGO)", url: "trust-ngo" },
      {
        name: "Foreign Collaborations Services",
        url: "foreign-collaborations-services",
      },
      { name: "Import - Export Consultancy", url: "import-export-consultancy" },
      { name: "Finance", url: "finance" },
      { name: "Payroll Processing", url: "payroll" },
      { name: "Other Services", url: "other-services" },
    ],
  },
  { name: "Career" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`fixed top-0 w-full h-[70px] z-50 transition-all duration-300 bg-slate-300 shadow-md `}
    >
      <div className="w-full mx-auto flex justify-between items-center px-5">
        <div className="logo flex-grow-0">
          <img
            src={Logo}
            alt="Logo"
            className="w-[120px] mt-3 items-center justify-center"
          />
        </div>
        <div className="hidden md:flex flex-grow justify-center px-5">
          <ul className="flex gap-4 space-x-6">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={
                    item.name === "Home"
                      ? "/"
                      : `/${item.name.toLowerCase().replace(/ /g, "-")}`
                  }
                  className="text-gray-900 text-[14px] w-28 font-medium hover:text-teal-600"
                >
                  {item.name.toUpperCase()}
                </Link>
                {item.submenu && (
                  <ul className="absolute text-sm font-normal rounded-md left-0 hidden w-60 bg-slate-300 border border-slate-200 shadow-lg z-50 group-hover:block hover:ease-out">
                    {item.submenu.map((subitem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-teal-500 hover:rounded-md hover:text-white"
                      >
                        <Link
                          to={`/${item.name
                            .toLowerCase()
                            .replace(/ /g, "-")}/${subitem.url.replace(
                            / /g,
                            "-"
                          )}`}
                        >
                          {subitem.name.toUpperCase()}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center mx-auto">
          <Link
            to="/contact"
            className="group flex items-center justify-center text-[14px] font-medium border-2 border-teal-600 rounded-2xl w-[10rem] p-2 bg-slate-300 text-gray-900 hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            CONTACT
            <span className="ml-2 text-teal-600 group-hover:text-white group-hover:translate-x-1 transition-transform duration-300">
              <ChevronRightIcon size={16} />
            </span>
          </Link>
        </div>
        {/* mobile navigation */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-300 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={
                    item.name === "Home"
                      ? "/"
                      : `/${item.name.toLowerCase().replace(/ /g, "-")}`
                  }
                  className="text-gray-900 text-[14px] font-medium hover:text-teal-600"
                  onClick={toggleMenu}
                >
                  {item.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
