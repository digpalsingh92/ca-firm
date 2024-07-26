import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-600 p-6">
    <div className="flex items-center justify-start text-white mr-auto">
      <span className="font-semibold text-xl">Brand Logo</span>
    </div>
    <div className="w-full flex lg:flex justify-end">
      <div className="text-sm lg:flex-grow">
        <Link to="/" className="flex mt-4 lg:inline-flex lg:mt-0 text-white mr-4">
          Home
        </Link>
        <Link to="/about" className="flex mt-4 lg:inline-flex lg:mt-0 text-white mr-4">
          About
        </Link>
        <Link to="/services" className="flex mt-4 lg:inline-flex lg:mt-0 text-white mr-4">
          Services
        </Link>
        <Link to="/contact" className="flex mt-4 lg:inline-flex lg:mt-0 text-white mr-4">
          Contact
        </Link>
      </div>
    </div>
  </nav>
  );
}

