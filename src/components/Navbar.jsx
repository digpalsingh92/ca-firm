import { Link } from "react-router-dom";
// import Logo from "../Asset/logo.png";
import Logo from "../Asset/Logo.gif";

const navItems = [
  { name: "Home" },
  {
    name: "About",
    submenu: [
      { name: "Overview", url: "overview" },
    ],
  },
  {
    name: "Our Team",
    // submenu: [
    //   { name: "Founder", url: "founder" },
    //   { name: "Partners", url: "partners" },
    //   { name: "Staffs", url: "staffs" },
    // ],
  },
  {
    name: "Services",
    submenu: [
      { name: 'Accounting', url: "accounting" },
      { name: 'Auditing & Assurance', url: "auditing-assurance" },
      { name: 'Income Tax', url: "income-tax" },
      { name: 'Goods & Services Tax (GST)', url: "gst" },
      { name: 'Company Law Matters Consultancy', url: "company-law-matters" },
      { name: 'Societies and Trust (NGO)', url: "trust-ngo" },
      { name: 'Foreign Collaborations Services', url: "foreign-collaborations-services" },
      { name: 'Import - Export Consultancy', url: "import-export-consultancy" },
      { name: 'Finance', url: "finance" },
      { name: 'Payroll Processing', url: "payroll" },
      { name: 'Other Services', url: "other-services" },
    ],
  },
  // {
  //   name: "Resources",
  //   submenu: [
  //     { name: "Blogs", url: "blogs" },
  //     { name: "Important Links", url: "important-links" },
  //     { name: "Latest Updates", url: "latest-updates" },
  //   ],
  // },
  { name: "Contact" },
  { name: "Career" },
];

export default function Navbar() {
  return (
    <nav className="bg-slate-200 shadow-lg">
      <div className=" w-full mx-auto flex justify-between items-center px-5">
        <div className="logo flex-grow-0">
          <img src={Logo} alt="Logo" className="w-[120px] mt-3 items-center justify-center" />
        </div>
        <div className="hidden md:block px-5">
        <ul className="flex gap-4 space-x-6">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.name === "Home" ? "/" : `/${item.name.toLowerCase().replace(/ /g, "-")}`}
                className="text-gray-900 text-[14px] w-28 font-medium hover:text-teal-600"
              >
                {item.name.toUpperCase()}
              </Link>
              {item.submenu && (
                <ul className="absolute text-sm font-normal rounded-md left-0 hidden w-60 bg-slate-300 border border-slate-200 shadow-lg z-50 group-hover:block hover:ease-out">
                  {item.submenu.map((subitem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-teal-500 hover:rounded-md hover:text-white">
                      <Link to={`/${item.name.toLowerCase().replace(/ /g, "-")}/${subitem.url.replace(/ /g, "-")}`}>
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
      </div>
    </nav>
  );
}

