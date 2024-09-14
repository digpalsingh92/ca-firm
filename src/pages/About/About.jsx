import React from "react";
import kalpana from "../../Asset/kalpana_chauhan.webp";
import lalit from "../../Asset/lalit_tomar.webp";
import Breadcrumb from "../../components/Breadcrumb";

const About = () => {
  return (
    <div className="min-h-screen w-full h-full bg-slate-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ name: "Home", link: "/" }, { name: "About" }]} />
      <div className=" space-y-8 w-[85%] p-10 bg-slate-100 rounded-lg">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">About Us</h2>
          <p className="mt-4  text-lg text-gray-600">
            Kalpana Chauhan & Associates is a Chartered Accountancy Firm,
          established in <strong> August 2010</strong>, having its <strong> Firm Registration No.(FRN)
            015585C, Pan No AALFK6521F</strong>. The firm is headed by CA Lalit Tomar and
            CA Kalpana Chauhan, who are Fellow members of the Institute of
            Chartered Accountants of India. The said concern is a partnership
            based out of Delhi NCR, with branch offices in Delhi, Greater Noida,
            and Mumbai.
          </p>
        </div>
        <div className="flex justify-center space-x-8 mt-8">
          <div className="text-center">
            <img
              className="w-40 h-40 rounded-full mx-auto"
              src={lalit}
              alt="CA Lalit Tomar"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              CA Lalit Tomar
            </h3>
            <p className="text-gray-600">Founder & Partner</p>
          </div>
          <div className="text-center">
            <img
              className="w-40 h-40 rounded-full mx-auto"
              src={kalpana}
              alt="CA Kalpana Chauhan"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              CA Kalpana Chauhan
            </h3>
            <p className="text-gray-600">Founder & Partner</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mt-12">
            Our Strategic Policy
          </h3>
          <p className="mt-4 text-gray-600">
            Our strategic policy is concentric operations and accordingly, we
            render specialized and innovative professional services with speed,
            accuracy, and reliability. It is speed that derives from sizeable
            infrastructural support and an extensive base of associates,
            accuracy that results from an understanding of the science, and
            reliability that only commitment can bestow.
          </p>
          <p className="mt-4 text-gray-600">
            Today, our world is being brought together not simply by the mandate
            of nations, but by the power of individuals who allow themselves to
            hope for a better life. Nothing holds greater possibility than a
            world with hope for its own future. Although the road may not be
            easy or quick, we think we can help our clients achieve even greater
            success.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mt-8">Our Mission</h3>
          <p className="mt-4 text-gray-600">
            Our mission is to serve our clients with creativity, brought about
            by out-of-the-box thinking, enthusiasm, stemming from the blend of
            young, experienced, and dynamic team members, diligence assured by
            cumulative years of the firm's experience, and vision captured by
            pre-empting client needs. This principle is at the heart of our
            work.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mt-8">
            Our Services
          </h3>
          <p className="mt-4 text-gray-600">
            We are pleased to introduce our firm, rendering services in the
            areas of Taxation Laws, Corporate Laws, Registration of Companies,
            Partnership Firms, Societies, Trusts, NGOs, Legal Consultancy,
            Labour Laws, Intellectual Property Rights, Foreign Direct Investment
            in India, Statutory Compliance Audit, and Legal advisory. It is the
            philosophy of our firm to be proactive to our clients’ requirements.
          </p>
          <p className="mt-4 text-gray-600">
            The firm works with a progressive and proactive mindset and serves
            its clients with quality and results. It has the potential to handle
            challenging and wide-ranging assignments. We strive to provide the
            best corporate services in tune with the rapidly changing regulatory
            and corporate environment and encourage our clients to follow the
            best Corporate Compliances and Governance practices.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mt-8">
            Our Standards
          </h3>
          <p className="mt-4 text-gray-600">
            To this end, we have set ourselves service standards that include
            identifying the needs of the client and developing a plan to meet
            those needs. We firmly believe in rendering Professional Services of
            the highest order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
