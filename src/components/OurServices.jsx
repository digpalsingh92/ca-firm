import React from 'react';
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