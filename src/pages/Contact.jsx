import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ContactForm from "../Components/ContactForm";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const offices = [
  {
    name: "Delhi",
    address:
      "812, Naurang House 21, Kasturba Gandhi Marg, Connaught Place, New Delhi-110001, India",
    phone1: "+91-11-46285900",
    phone2: "1800110099 (India Toll Free)",
    phone3: "+91-8826897200",
    email: "mail@gkkediaandco.com",
    location: { lat: 28.6315, lng: 77.2167 },
  },
  {
    name: "Pahar Ganj",
    address: "Pahar Ganj Address",
    phone1: "Phone1",
    phone2: "Phone2",
    phone3: "Phone3",
    email: "email@example.com",
    location: { lat: 28.6407, lng: 77.2136 },
  },
  {
    name: "Gurgaon",
    address: "Gurgaon Address",
    phone1: "Phone1",
    phone2: "Phone2",
    phone3: "Phone3",
    email: "email@example.com",
    location: { lat: 28.6407, lng: 77.2136 },
  },
  {
    name: "Greater Noida",
    address: "Greater Noida Address",
    phone1: "Phone1",
    phone2: "Phone2",
    phone3: "Phone3",
    email: "email@example.com",
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
    <section className=" bg-gray-100">
      <div className="flex flex-col mt-5 justify-center items-center w-full min-h-screen">
        <div className=" w-[90%] bg-gray-100 ">
          <ul className="flex gap-2">
            {offices.map((office, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedOffice(office)}
                  className={`px-4 py-2 mb-2 rounded-md ${
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
        <div className=" w-[90%] flex flex-col h-full justify-center">
          <h1 className="text-3xl font-bold mb-4">
            Head Office : {selectedOffice.name}
          </h1>
          <div className="mb-4">
            <p className="text-xl gap-2 flex items-center ">
              <FaMapMarkerAlt /> {selectedOffice.address}
            </p>
            <p className="text-xl gap-2 flex items-center">
              <FaPhoneAlt/> {selectedOffice.phone1}
            </p>
            <p className="text-xl gap-2 flex items-center">
              <FaEnvelope/> {selectedOffice.email}
            </p>
          </div>
          <LoadScript googleMapsApiKey="process.env.GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={selectedOffice.location}
              zoom={15}
            >
              <Marker position={selectedOffice.location} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
