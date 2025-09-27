/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          heading: ["Antonio", "sans-serif"],
          body: ["League Spartan", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
