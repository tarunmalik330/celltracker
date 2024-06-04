/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "32px",
        xsm: "40px",
        md: "64px",
        "2lg": "28px",
      },
      colors: {
        blue: "#03045e",
      },
      lineHeight: {
        xs: "100%",
        xxs: "116%",
        sm: "120%",
        md: "169%",
      },
      backgroundImage: {
        "find-phone-bg": "url('./assets/images/png/bg-find.png')",
        "join-companies-bg": "url('./assets/images/png/bg-join-companies.png')",
      },
    },
  },
  plugins: [],
};
