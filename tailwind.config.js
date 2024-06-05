/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        bgsize: "100% 100%",
      },
      fontSize: {
        xxs: "32px",
        xsm: "40px",
        md: "64px",
        "2lg": "28px",
      },
      boxShadow: {
        button: "5px 5px 7px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        blue: "#03045e",
        offBlue: "#00B5D81A",
        sky: "#00B5D8",
        lightSky: "#03045e1a",
        offWhite: "#FFFFFFCC",
        grey: "#000000B2",
        lghtGrey: "#000000b3",
        lighblue: "#03045E1A",
        primary: "#FAFAFA",
        secondary: "#959595",
        gainsborogrey: "#EDEDED",
      },
      lineHeight: {
        xxs: "80%",
        xs: "100%",
        xxs: "116%",
        sm: "120%",
        md: "167%",
        lg: "169%",
      },
      backgroundImage: {
        bluegradient:
          "linear-gradient(7.95deg, #00B5D8 -3.4%, #000080 114.66%)",
        "find-phone-bg": "url('./assets/images/png/bg-find.png')",
        "join-companies-bg": "url('./assets/images/png/bg-join-companies.png')",
        heroBg: "url('./assets/images/webp/headerBgimg.webp')",
      },
    },
    plugins: [],
  },
};
