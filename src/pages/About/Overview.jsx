import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb'
import teamImage from '../../Asset/team.jpg'

export default function Overview() {
  return (
    <div className="w-full p-5">
      <Breadcrumb items={[{ name: 'Home', link: '/' }, { name: 'About', link: '/about'}]} />
      <section className="w-full bg-gray-100 py-10">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">About Us</h1>
          <p className="text-lg text-slate-600 text-center max-w-4xl mb-10">
            Welcome to Kalpana & Associates, a full-service Chartered Accountancy Firm dedicated to delivering
            exceptional financial and advisory services. With years of experience, we serve clients across
            India from our offices located in the Delhi/NCR region.
          </p>
          <img src={teamImage} alt="Our Team" className="w-full max-w-4xl rounded-lg shadow-md" />
        </div>
      </section>

      <section className="w-full py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6">
              Our mission is to provide personalized, high-quality accounting, auditing, and financial services
              to our clients. We strive to build long-term relationships based on trust, integrity, and
              professionalism.
            </p>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Vision</h2>
            <p className="text-lg text-slate-600">
              Our vision is to be the most trusted and respected professional services firm recognized by our
              clients for delivering excellence. We aim to grow our presence across India while maintaining our
              commitment to quality and client satisfaction.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={teamImage} alt="Our Vision" className="w-full max-w-sm rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex justify-center">
            <img src={teamImage} alt="Our Values" className="w-full max-w-sm rounded-lg shadow-md" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-slate-600 space-y-2">
              <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
              <li>Professionalism: We provide professional and high-quality services.</li>
              <li>Client Focus: Our clients' needs are at the forefront of everything we do.</li>
              <li>Excellence: We continually strive for excellence in our services.</li>
              <li>Collaboration: We believe in teamwork and collaboration to achieve the best results.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
