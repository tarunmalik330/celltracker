/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        bgsize: "100% 100%",
      },
      screens: {
        xs: "475px",
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
        blueLight: "#F2F6FA",
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
        xsm: "114%",
        sm: "120%",
        md: "167%",
        lg: "169%",
        xl: "132%",
      },
      backgroundImage: {
        bluegradient:
          "linear-gradient(7.95deg, #00B5D8 -3.4%, #000080 114.66%)",
        "find-phone-bg": "url('./assets/images/webp/bg-find.webp')",
        "join-companies-bg":
          "url('./assets/images/webp/bg-join-companies.webp')",
        heroBg: "url('./assets/images/webp/headerBgimg.webp')",
        bluegradient:
          "linear-gradient(7.95deg, #00B5D8 -3.4%, #000080 114.66%)",
        headerBg: "url('./assets/images/webp/headerBgimg.webp')",
        heroBg: "url('./assets/images/webp/lendingBgimg.webp')",
        needBg: "url('./assets/images/webp/needBgimg.webp')",
        heroBoxbg:
          "linear-gradient(0deg, #FFFFFF, #FFFFFF),linear- gradient(7.95deg, rgba(0, 181, 216, 0.05) - 3.4 %, rgba(0, 0, 128, 0.05) 114.66 %)",
        headersmbg: "url('./assets/images/webp/lending-bgheader-sm.webp')",
      },
    },
    plugins: [],
  },
};
