import { Link } from "react-router-dom";
import Logo from "../Asset/logo.png";

const navItems = [
  { name: "Home" },
  {
    name: "About",
    submenu: [{ name: "Overview" }, { name: "Journey & Milestones" }],
  },
  {
    name: "Our Team",
    submenu: [{ name: "Partners" }, { name: "Chartered Accountants" }, { name: "Other Staffs" }],
  },
  {
    name: "Services",
    submenu: [
      { name: "Income Tax" },
      { name: "Trademarks" },
      { name: "Accounting" },
      { name: "Auditing & Assurance" },
      { name: "Goods & Service Tax (GST)" },
      { name: "Tax & GST Services" },
      { name: "Latest Updates" },
      { name: "Latest Updates" },
    ],
  },
  { name: "Resources",
    submenu: [
      { name: "Blogs" },
      { name: "Important Links" },
      { name: "Latest Updates" },
    ],
   },
   { name: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-slate-400 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-1">
        <div className="logo">
          <img src={Logo} alt="Logo" className="w-[120px]" />
        </div>
        <ul className="flex gap-4 space-x-6">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`}
                className="text-gray-900 text-[18px] w-28 hover:text-slate-200"
              >
                {item.name.toUpperCase()}
              </Link>
              {item.submenu && (
                <ul className="absolute text-sm font-normal rounded-md left-0 hidden w-60 bg-slate-300 border border-slate-200 shadow-lg z-50 group-hover:block hover:ease-out">
                  {item.submenu.map((subitem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-teal-500 hover:rounded-md hover:text-white">
                      <Link to={`/${item.name.toLowerCase()}`}>
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
    </nav>
  );
}
