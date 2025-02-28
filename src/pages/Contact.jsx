import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Helmet } from "react-helmet";

const offices = [
  {
    name: "Greater Noida",
    Office: "HEAD OFFICE",
    address:"B-406, 4th Floor, Tower-B, Plot No 7, Techzone-4, Grandhtom, Greater Noida-201308",
    phone: "9013870636",
    email: "contact@kcataxcare.com",
    location: { lat: 28.6315, lng: 77.2167 },
  },
  {
    name: "Delhi",
    Office: "BRANCH OFFICE",
    address: "F-6, Ground Floor, Gali No 4, Pandav Nagar, Delhi-110091.",
    phone: "8076501471",
    email: "contact@kcataxcare.com",
    location: { lat: 28.6407, lng: 77.2136 },
  },
  {
    name: "Aligarh (U.P.)",
    Office: "BRANCH OFFICE",
    address: "Block Colony, Kasiso Road Khair, Aligarh, Uttar Pradesh-202138.",
    phone: "8076501471",
    email: "contact@kcataxcare.com",
    location: { lat: 28.6407, lng: 77.2136 },
  },
  {
    name: "Mumbai",
    Office: "BRANCH OFFICE",
    address: "1601, Casa Sereno Wing-E, Lodha Upperthane, Thane, Mumbai-421302.",
    phone: "9013870636",
    email: "contact@kcataxcare.com",
    location: { lat: 28.6407, lng: 77.2136 },
  },
];

const containerStyle = {
  width: "100%",
  height: "400px",
};


const ContactPage = () => {
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  return (
    <>
    <Helmet>
            <title>Contact us - KCA TaxCare</title>
            <meta name="description" content="Explore our comprehensive range of accounting and financial services." />
    </Helmet>
    <section className="container p-4">
      <div className="flex flex-col py-4 mt-[70px] items-center w-full min-h-[70vh]">
        <div className=" w-[90%] ">
          <ul className="flex flex-wrap justify-center md:justify-start gap-2">
            {offices.map((office, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedOffice(office)}
                  className={`p-2 mb-2 rounded-md ${
                    selectedOffice.name === office.name
                      ? "bg-teal-600 text-white"
                      : " text-black hover:bg-teal-600"
                  }`}
                >
                  {office.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className=" w-full p-2 flex flex-col h-full justify-center">
          <h1 className="text-2xl text-center md:text-left font-bold mb-4">
            {selectedOffice.Office}: <span className="text-teal-600">{selectedOffice.name}</span>
          </h1>
          <div className="mb-4">
            <p className="text-xl gap-3 flex items-center ">
              <FaMapMarkerAlt className="text-teal-600 font-medium" /> {selectedOffice.address}
            </p>
            <p className="text-xl gap-2 flex items-center">
              <FaPhoneAlt className="text-teal-600 font-medium"/> {selectedOffice.phone}
            </p>
            <p className="text-xl gap-2 flex items-center">
              <FaEnvelope className="text-teal-600 font-medium"/> {selectedOffice.email}
            </p>
          </div>
          {/* <div className="w-[90%] m-auto">
          <LoadScript googleMapsApiKey="process.env.GOOGLE_MAPS_API_KEY">
            <GoogleMap 
              mapContainerStyle={containerStyle}
              center={selectedOffice.location}
              zoom={15}
            >
              <Marker position={selectedOffice.location} />
            </GoogleMap>
          </LoadScript>
          </div> */}
        </div>
      </div>
      <ContactForm />
    </section>
    </>
  );
};

export default ContactPage;
