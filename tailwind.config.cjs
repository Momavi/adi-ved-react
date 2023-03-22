/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        oldmb: "320px",
        preoldmb: "420px",
      },
    },
  },
  plugins: [],
};