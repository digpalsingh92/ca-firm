import React from "react";

const ScrollableSection = ({ title, children }) => {
  return (
    <div className="flex flex-col w-full p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center bg-yellow-600 text-white px-4 py-2 rounded-t-lg">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="h-4 w-4 bg-yellow-600 transform rotate-45 -translate-y-1.5"></div>
      </div>
      <div className="overflow-y-auto max-h-60 p-4"> {/* Increased height from max-h-48 to max-h-60 */}
        {children}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-[60vh] bg-slate-50 flex items-start justify-center mt-6 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full h-[90%] grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Latest News Section */}
        <ScrollableSection title="Latest News">
          <ul className="text-sm text-gray-800 space-y-2">
            {/* Add the Latest News items here */}
            <li>GST Council meeting today. Will Nirmala Sitharaman increase GST rates, slabs?</li>
            <li>CBIC further extends enabling New Changes in GSTR-9 and GSTR-9C to Dec 21</li>
            <li><span className="font-semibold">17 Dec 19</span> Industry Favours New GSTR Slow Implementation & 4-digits HSN Code</li>
            <li>Centre releases over Rs 35,000 crore as pending GST compensation to states</li>
            <li>Centre releases over Rs 35,000 crore as pending GST compensation to states</li>
            <li>States get GST dues ahead of key meet</li>
            <li>States get GST dues ahead of key meet</li>
          </ul>
        </ScrollableSection>

        {/* Our Blog Section */}
        <ScrollableSection title="Our Blog">
          <ul className="text-sm text-gray-800 space-y-2">
            {/* Add the Blog items here */}
            <li><span className="font-semibold">09 Dec 2021</span> About Us - ASSOCIATES is a professional firm of Chartered Accountants...</li>
          </ul>
        </ScrollableSection>
      </div>
    </div>
  );
};

export default Dashboard;
