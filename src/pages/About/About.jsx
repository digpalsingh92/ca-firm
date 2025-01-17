import React from 'react';
import { Helmet } from 'react-helmet';
import { Award, Users, Target, Shield, BookOpen, Globe } from 'lucide-react';
import kalpana from "../../Asset/kalpana_chauhan.webp";
import lalit from "../../Asset/lalit_tomar.webp";
import Breadcrumb from "../../components/Breadcrumb";

const stats = [
  { label: 'Years of Experience', value: '14+' },
  { label: 'Satisfied Clients', value: '1000+' },
  { label: 'Professional Team', value: '20+' },
  { label: 'Cities Served', value: '4' },
];

const values = [
  {
    icon: Target,
    title: 'Strategic Excellence',
    description: 'Specialized and innovative professional services with speed, accuracy, and reliability.'
  },
  {
    icon: Shield,
    title: 'Commitment to Quality',
    description: 'Highest standards of professional service delivery and client satisfaction.'
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Proactive solutions tailored to meet unique client requirements.'
  },
  {
    icon: Globe,
    title: 'Wide Reach',
    description: 'Serving clients across Delhi NCR, Greater Noida, and Mumbai.'
  }
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Kalpana Chauhan & Associates</title>
        <meta name="description" content="Learn about Kalpana Chauhan & Associates, a leading Chartered Accountancy Firm established in 2010." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Breadcrumb items={[{ name: "Home", link: "/" }, { name: "About" }]} />
        
        {/* Hero Section */}
        <div className="relative isolate mt-[70px] px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-4xl py-12 sm:py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Kalpana Chauhan & Associates is a Chartered Accountancy Firm, established in <span className="font-semibold">August 2010</span>, with Firm Registration No. (FRN) <span className="font-semibold">015585C</span> and PAN No <span className="font-semibold">AALFK6521F</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-teal-600 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Leadership
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Led by experienced professionals who are Fellow members of the Institute of Chartered Accountants of India.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
              {[
                { image: lalit, name: "CA Lalit Tomar", role: "Founder & Partner" },
                { image: kalpana, name: "CA Kalpana Chauhan", role: "Founder & Partner" }
              ].map((leader) => (
                <div key={leader.name} className="flex flex-col items-center">
                  <img
                    className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
                    src={leader.image}
                    alt={leader.name}
                  />
                  <h3 className="text-2xl font-semibold text-gray-900">{leader.name}</h3>
                  <p className="text-lg text-gray-600">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Built on the foundation of excellence, integrity, and client success.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col items-center text-center">
                  <div className="rounded-lg bg-teal-100 p-4 mb-6">
                    <value.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Services Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Our Mission
                </h2>
                <p className="text-lg leading-8 text-gray-600">
                  Our mission is to serve our clients with creativity, brought about by out-of-the-box thinking, enthusiasm, stemming from the blend of young, experienced, and dynamic team members, diligence assured by cumulative years of the firm's experience, and vision captured by pre-empting client needs.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Our Services
                </h2>
                <p className="text-lg leading-8 text-gray-600">
                  We provide comprehensive services in Taxation Laws, Corporate Laws, Registration of Companies, Partnership Firms, Societies, Trusts, NGOs, Legal Consultancy, Labour Laws, Intellectual Property Rights, Foreign Direct Investment in India, Statutory Compliance Audit, and Legal advisory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;