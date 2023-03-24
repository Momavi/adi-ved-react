/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
       backgroundImage: {
        '1-price-bg': "url('/images/price/1.svg')",
      },
      screens: {
        oldmb: "320px",
        preoldmb: "420px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
    themes: ["light", "dark",]
  },
};
