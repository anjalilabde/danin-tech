/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: '1380px'
        },
      },
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
      fontSize: {
        '20px': ['20px', '35px'],
        '32px': ['32px', '46px'],
        '50px': ['50px', '52px'],
      },
      lineHeight:{
        52:"52px"
      },
      backgroundImage:{
        'dark-900-overlay': 'linear-gradient(180deg, #010C27 0%, #01091C 21.82%, #010C27 100%)',
        'dark-overlay': 'linear-gradient(90deg, #010C27 33.59%, rgba(1, 12, 39, 0.74) 73.48%, rgba(1, 12, 39, 0) 100%);'
      }
    },
    
  },
  plugins: [],

}