import React, { useState } from "react";
import emailjs from "emailjs-com";


const Options = [
  { name: 'Select Service', value: "" },
  { name: 'Accounting', value: "Accounting" },
  { name: 'Auditing & Assurance', value: "Auditing & assurance" },
  { name: 'Income Tax', value: "Income Tax" },
  { name: 'Goods & Services Tax (GST)', value: "Gst" },
  { name: 'Company Law Matters Consultancy', value: "Company Law / matters" },
  { name: 'Societies and Trust (NGO)', value: "Trust Ngo" },
  { name: 'Foreign Collaborations Services', value: "Foreign Collaborations Services" },
  { name: 'Import - Export Consultancy', value: "Import Export Consultancy" },
  { name: 'Finance', value: "Finance" },
  { name: 'Payroll Processing', value: "Payroll" },
  { name: 'Other Services', value: "Other Services" },
]
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    country: "",
    city: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Configuration
    emailjs
      .send(
        'service_755nsx7',  // EmailJS Service ID
        'template_oo4tjh7',  // EmailJS Template ID
        formData,            // The data you want to send
        'rLR12rtXFfkl3KoTM'       // Your User ID from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      country: "",
      city: "",
      message: ""
    });
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col lg:flex-row justify-between bg-white shadow-lg p-6 rounded-lg">
        <div className="bg-teal-500 text-white p-8 rounded-lg lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Kalpana Chauhan and associates</h2>
          <p className="mb-4">For any query or concern, get in touch with us today!</p>
          <h3 className="font-bold">Opening Hour</h3>
          <p>Mon - Sat: 9:30 am to 6 pm</p>
        </div>
        <div className="flex flex-col lg:w-2/3 p-8 bg-gray-100 rounded-lg">
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 rounded border border-gray-300"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="p-2 rounded border border-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail Id"
              value={formData.email}
              onChange={handleChange}
              className="col-span-1 lg:col-span-2 p-2 rounded border border-gray-300"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="p-2 rounded border border-gray-300"
              required
            >
            {
              Options.map((option, index) => (
                <option key={index} value={option.value}>{option.name}</option>
              ))
            }
            </select>
            <input
              type="text"
              name="country"
              placeholder="Select Country"
              value={formData.country}
              onChange={handleChange}
              className="p-2 rounded border border-gray-300"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="p-2 rounded border border-gray-300"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="col-span-1 lg:col-span-2 p-2 rounded border border-gray-300"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="col-span-1 lg:col-span-2 bg-teal-500 text-white p-2 rounded hover:bg-teal-700"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
