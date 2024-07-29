/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      custom: ['Roboto'],
    },
    backgroundImage: {
      'hero-pattern': "url('/Asset/income-Tax.jpg')",
    },
  },
  plugins: [],
}

