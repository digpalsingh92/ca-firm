import React from 'react';

const jobListings = [
  {
    id: 1,
    title: 'Financial Analyst',
    location: 'Noida, India',
    type: 'Full-time',
    description: 'We are looking for a skilled Financial Analyst to join our team.',
  },
  {
    id: 2,
    title: 'Chartered Accountant',
    location: 'Greater Noida, India',
    type: 'Full-time',
    description: 'We are seeking a Chartered Accountant to join our team. The ideal candidate will have experience in accounting and financial management.',
  },
  // Add more job listings here
];

const Career = () => {
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
              <button className="mt-6 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-800">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
