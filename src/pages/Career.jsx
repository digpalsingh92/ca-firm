import React, { useState } from 'react';

const jobListings = [
  {
    id: 1,
    title: 'Accounts Assistant',
    location: 'Noida, India',
    type: 'Full-time',
    description: "We are a reputable Chartered Accountancy firm providing comprehensive financial services, including accounting, taxation, and business advisory.",
    jobSummary: "We are seeking a detail-oriented and organized Accounts Assistant to support our accounting team. The ideal candidate will assist with daily financial tasks, maintain accurate records, and help ensure smooth operations within the finance department.",
    keyResponsibilities: [
      "Assist in maintaining accurate financial records, including daily bookkeeping, ledgers, and account reconciliations.",
      "Process invoices, payments, and expense reports efficiently and accurately.",
      "Support in the preparation of financial statements and management reports.",
      "Assist with tax compliance, including GST, TDS, and income tax filings."
    ],
    qualifications: [
      "Bachelor's degree in Accounting, Finance, or a related field.",
      "Proven experience as an Accounts Assistant or in a similar role.",
      "Strong understanding of accounting principles and financial reporting.",
      "Proficiency in accounting software (e.g., Tally, QuickBooks) and Microsoft Office Suite (Excel, Word).",
      "Excellent organizational skills and attention to detail."
    ],
    applyLink: 'https://forms.gle/AwF7XQPe8tyXrorv8', // Replace with actual Google Form link
  },
  
];

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    if (selectedJob === job) {
      setSelectedJob(null); // Close if already open
    } else {
      setSelectedJob(job); // Open selected job
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Careers</h1>
          <p className="text-lg text-gray-600 mt-4">Join our team and help us build the future!</p>
        </div>
        <div className="space-y-8">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
              <p className="text-gray-600">{job.location} | {job.type}</p>
              <p className="mt-4 text-gray-700">{job.description}</p>
              <div className="mt-6 flex space-x-4">
                {/* View Details Button */}
                <button
                  onClick={() => handleJobClick(job)}
                  className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-800"
                >
                  {selectedJob === job ? "Hide Details" : "View Details"}
                </button>
                {/* Apply Now Button */}
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-800"
                >
                  Apply Now
                </a>
              </div>

              {/* Job Details Section */}
              {selectedJob === job && (
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">Job Description</h3>
                  <p className="mt-2 text-gray-700">{job.jobSummary}</p>

                  <h4 className="mt-4 text-lg font-semibold text-gray-800">Key Responsibilities</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    {job.keyResponsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>

                  <h4 className="mt-4 text-lg font-semibold text-gray-800">Qualifications</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    {job.qualifications.map((qualification, index) => (
                      <li key={index}>{qualification}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
