import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

export default function Breadcrumb({ items }) {
  return (
    <nav className="bg-gray-100 py-3 px-5 rounded-md w-full">
      <ol className="list-reset flex font-medium text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {item.link ? (
              <Link to={item.link} className="text-slate-400 font-semibold hover:text-teal-600">
                {item.name}
              </Link>
            ) : (
              <span>{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
