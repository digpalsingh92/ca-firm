import React from "react";
import kalpana from "../Asset/kalpana_chauhan.jpeg";

export default function FoundersMessage() {
  return (
    <div className="flex flex-col w-full h-auto items-center justify-center bg-slate-200 py-8 px-4 sm:px-8 lg:px-16">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Mrs. Kalpana says</h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg sm:font-medium lg:text-xl mb-8">
          Accounting and bookkeeping trace their origins back to the ancient
          wisdom found in Chanakya’s renowned treatise, the 'Arthashastra'.
          Every financial transaction must be meticulously documented, adhering
          to applicable laws, regulations, and Generally Accepted Accounting
          Principles (GAAP). <br /> In today's world, a Chartered Accountancy (CA) firm
          equipped with state-of-the-art technology, advanced software, and
          skilled personnel can deliver results that are both precise and
          reliable. The combination of these tools and expertise ensures that
          financial statements are not only accurate but also compliant with the
          latest statutory requirements. Modern CA firms also provide
          value-added services like financial analysis, tax planning, and
          business advisory, helping clients navigate the complexities of the
          financial landscape.
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
        <p className="text-lg w-[12rem] p-2 font-medium sm:text-xl rounded-md ">CA Kalpana Chauhan</p>
      </div>
    </div>
  );
}
