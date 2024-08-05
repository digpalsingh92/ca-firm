import React, { useState } from "react";

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
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      country: "",
      city: "",
      message: ""
    }); // Clear the form after submission
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col lg:flex-row justify-between bg-white shadow-lg p-6 rounded-lg">
        <div className="bg-blue-500 text-white p-8 rounded-lg lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4">G. K. Kedia & Co.</h2>
          <p className="mb-4">
            For any query, concern or financial advice and solution, get in touch with us today!
          </p>
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
              type="email"
              name="email"
              placeholder="E-Mail Id"
              value={formData.email}
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
              <option value="">Select Services</option>
              <option value="Accounting">Accounting</option>
              <option value="Auditing">Auditing</option>
              <option value="Consultancy">Consultancy</option>
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
            <div className="col-span-1 lg:col-span-2 flex items-center">
              <input type="checkbox" className="mr-2" required />
              <span>I'm not a robot</span>
            </div>
            <button
              type="submit"
              className="col-span-1 lg:col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
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
