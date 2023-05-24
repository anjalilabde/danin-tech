/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'anomalia': ['anomalia'],
      },
      colors: {
        blue: {
          "dark": "#181B31",
          "primary": "#102250",
          900: "#010C27",
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: '1380px'
      },
    },
  },
  plugins: [],

}