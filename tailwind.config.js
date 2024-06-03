/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        xxs: "32px",
        xsm: "40px",
        md: "64px",
      },
      colors: {
        blue: "#03045e",
      },
    },
  },
  plugins: [],
};
