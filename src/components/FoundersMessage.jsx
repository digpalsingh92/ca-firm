import React from "react";
import kalpana from "../Asset/kalpana_chauhan.webp";

export default function FoundersMessage() {
  return (
    <div className="flex flex-col w-full h-auto items-center justify-center bg-slate-200 py-8 px-4 sm:px-8 lg:px-16">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Mrs. Kalpana says
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg lg:text-lg mb-8">
          Accounting and bookkeeping date back to Chanakya's 'Arthashastra,'
          emphasizing the meticulous documentation of financial transactions in
          line with GAAP. Today, modern Chartered Accountancy firms, leveraging
          advanced technology and skilled personnel, ensure accurate, compliant
          financial statements. They also offer value-added services like
          financial analysis, tax planning, and business advisory to help
          clients navigate financial complexities.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 sm:w-40 sm:h-40 mb-4">
          <img
            src={kalpana} // Replace with the actual image path
            alt="CA Kalpana Chauhan"
            className="object-cover w-full h-full rounded-full shadow-lg"
          />
        </div>
        <p className="text-lg w-[14rem] p-2 font-medium sm:text-xl rounded-md ">
          CA Kalpana Chauhan
        </p>
      </div>
    </div>
  );
}
