// import React from "react";
// import { Link } from "react-router-dom";
// import gst from "../Asset/gst.webp";
// import IncomeTax from "../Asset/income-tax.webp";
// import CompanyLaw from "../Asset/company-law.webp";
// import Finance from "../Asset/finance.webp";
// import Taxation from "../Asset/income-tax.webp";
// import Payroll from "../Asset/payroll-process.webp";

// const services =[
//   {
//     name : "Goods & Service Tax (GST)",
//     description: "The GST journey in India began in the year 2017, and since then, it has come a long way in shaping our economy. All matters like registration, form filing, application for refund, etc. ",
//     img: gst,
//   },
//   {
//     name : "Income Tax Return Filing",
//     description: "Income Tax Return Filing is a process of filing the details of your income and tax paid to the government for a particular financial year. ",
//     img: IncomeTax,
//   },
//   {
//     name : "Company Law Matters Consultancy",
//     description: "Company Law Matters Consultancy is a service that helps businesses comply with the Companies Act, 2013, and other related laws. ",
//     img: CompanyLaw,
//   },
//   {
//     name : "Finance Services",
//     description: "Finance Services are services that help businesses manage their finances effectively. ",
//     img: Finance,
//   },
//   {
//     name : "Taxation Services",
//     description: "Taxation Services are services that help businesses comply with tax laws and regulations. ",
//     img: Taxation,
//   },
//   {
//     name: "Payroll Services",
//     description: "Payroll Services are services that help businesses manage their payroll effectively. ",
//     img: Payroll,
//   }
// ]

// export default function OurServices() {
//   return (
//     <>
//       <section className="w-full mt-10 p-5 justify-center items-center bg-slate-50">
//         <div className="w-full h-full m-2 flex items-center justify-center">
//           <div className="w-full max-w-6xl flex flex-col justify-center items-center">
//             <div className="w-full flex  mb-5">
//               <span className="text-3xl text-slate-800 font-bold">
//                 What we do
//               </span>

//             </div>
//             <div className="w-full flex flex-wrap gap-5 justify-center items-center">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className="w-full md:w-[30%] h-[280px] box-border shadow-md shadow-slate-400 rounded-md flex justify-center items-center transition duration-300 group hover:bg-teal-600 p-4"
//                 >
//                   <div className="w-full flex gap-3 flex-col items-center">
//                     <div className="w-full h-full flex flex-col gap-3 justify-center items-center mt-3">
//                       <img
//                         src={service.img}
//                         className="w-32 h-32 rounded-[50%]"/>
//                       <span className="text-xl font-bold text-slate-800 group-hover:text-white text-center">
//                         {service.name}
//                       </span>
//                       <p className="text-center w-[70] text-sm text-slate-600 group-hover:text-white">{service.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className="mt-6 w-[75%] md:w-[13%] h-[60px] bg-slate-200 rounded-lg text-xl font-medium transition duration-300 hover:bg-teal-600 hover:ease-out hover:font-semibold hover:text-slate-100">
//               <Link to="/services">More Details</Link>
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import React from 'react';
import { Helmet } from 'react-helmet';
import { Calculator, FileText, TrendingUp, BarChart2, PieChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    name: 'Tax Planning',
    description: 'Comprehensive tax planning services for individuals and businesses.',
    icon: Calculator,
  },
  {
    name: 'Audit & Assurance',
    description: 'Independent audit services ensuring accuracy and compliance.',
    icon: FileText,
  },
  {
    name: 'Accounting & Bookkeeping',
    description: 'Professional accounting and bookkeeping services for businesses.',
    icon: TrendingUp,
  },
  {
    name: 'Income Tax Services',
    description: 'Income Tax Return (ITR) filing and tax compliance services.',
    icon: BarChart2,
  },
  {
    name: 'Goods & Services Tax (GST) Services',
    description: 'GST registration, filing, and compliance services for businesses.',
    icon: PieChart,
  },
  {
    name: 'Finance',
    description: 'Financial planning, analysis, and management services for businesses.',
    icon: Users,
  },
];

export default function Services() {
  return (
    <motion.div>
      <Helmet>
        <title>Our Services - CA Portfolio</title>
        <meta name="description" content="Explore our comprehensive range of accounting and financial services." />
      </Helmet>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
             What we do
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide expert financial services to help your business grow and succeed in today's competitive market.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex shadow-md shadow-slate-400 p-8 flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-teal-600" aria-hidden="true" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <Link
                        to="/services"
                        className="text-sm font-semibold leading-6 text-teal-600 hover:text-teal-500"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </motion.div>
  );
}