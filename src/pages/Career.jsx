import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Briefcase, GraduationCap, Heart, Coffee } from 'lucide-react';

const openings = [
  {
    title: 'Account Analyst',
    type: 'Full-time',
    location: 'Noida, Delhi',
    experience: 'Fresher',
    description: 'Looking for an experienced tax professional to handle complex tax planning and compliance.',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, dental, and vision coverage',
  },
  {
    icon: GraduationCap,
    title: 'Professional Development',
    description: 'Continuous learning opportunities and certification support',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible working hours and remote work options',
  },
  {
    icon: Briefcase,
    title: 'Career Growth',
    description: 'Clear career progression and mentorship programs',
  },
];

export default function Career() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Team | Financial Solutions</title>
        <meta name="description" content="Explore career opportunities and join our team of financial professionals." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-teal-800">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
          />
        </div>
        <div className="relative px-6 py-24 sm:px-8 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-teal-100">
              Build your career with a leading financial services firm. We're always looking for talented professionals to join our team.
            </p>
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Current Openings
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our current job opportunities and find your perfect role.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2">
            {openings.map((job) => (
              <div
                key={job.title}
                className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/70 p-8 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <div className="mt-2 flex items-center gap-x-4 text-sm text-gray-500">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.experience}</span>
                </div>
                <p className="mt-4 text-gray-600">{job.description}</p>
                <button
                  onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-6 self-start rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors duration-200"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Join Us?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer competitive benefits and a supportive work environment.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                  <benefit.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      {/* <div id="application-form" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Apply Now
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Take the first step towards joining our team.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-16 space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
              {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-teal-600 placeholder:text-gray-400 focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-semibold leading-6 text-gray-900">
                Position Applied For
              </label>
              <select
                id="position"
                {...register('position', { required: 'Position is required' })}
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select a position</option>
                {openings.map((job) => (
                  <option key={job.title} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
              {errors.position && <p className="mt-2 text-sm text-red-600">{errors.position.message}</p>}
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-semibold leading-6 text-gray-900">
                Resume/CV
              </label>
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                {...register('resume', { required: 'Resume is required' })}
                className="mt-2 block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-600 hover:file:bg-teal-100"
              />
              {errors.resume && <p className="mt-2 text-sm text-red-600">{errors.resume.message}</p>}
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-sm font-semibold leading-6 text-gray-900">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                rows={4}
                {...register('coverLetter', { required: 'Cover letter is required' })}
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
              {errors.coverLetter && <p className="mt-2 text-sm text-red-600">{errors.coverLetter.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
}