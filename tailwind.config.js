/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg': "url('./assets/images/webp/headerBgimg.webp')",
      },

      backgroundSize: {
        'bgsize': "100% 100%"
      },
      fontSize: {

        xxs: "32px",
        xsm: "40px",
        md: "64px",
      },
      colors: {
        blue: "#03045e",
        sky: "#00B5D8",
        lightSky: "#03045e1a",
        offWhite: "#FFFFFFCC",
        grey: '#000000B2',
        lghtGrey: '#000000b3',

      },
      lineHeight: {
        xxs:"80%",
        xs: "100%",
        sm: "120%",
        md: "167%",
        lg: "169%",
      },
    },
  },
  plugins: [],
};
