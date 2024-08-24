/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '410px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    fontFamily: {
      custom: ["ubuntu", "sans-serif"],
    },
    // backgroundImage: {
    //   'hero-pattern': "url('/Asset/income-Tax.jpg')",
    // },
  },
  plugins: [],
}

