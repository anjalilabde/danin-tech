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
        gray:{
          550:"#D6E1FC"
        }
      },
      fontSize: {
        '20px': ['20px', '35px'],
        '32px': ['32px', '46px'],
        '50px': ['50px', '52px'],
      },
      lineHeight:{
        52:"52px"
      },
      borderRadius:{
        '20px':"20px"
      },
      backgroundImage:{
        'dark-900-overlay': 'linear-gradient(180deg, #010C27 0%, #01091C 21.82%, #010C27 100%)',
        'dark-800-overlay': 'linear-gradient(359.43deg, #010C27 57.61%, rgba(1, 12, 39, 0.6) 59.81%, rgba(1, 12, 39, 0.12) 63.13%, rgba(1, 12, 39, 0) 66.61%)',
        'dark-500-overlay': 'linear-gradient(360deg, #010C27 0%, rgba(1, 12, 39, 0.6) 16.23%, rgba(1, 12, 39, 0.12) 40.79%, rgba(1, 12, 39, 0) 66.59%)',
        // 'dark-400-overlay': 'radial-gradient(325.52% 125.1% at 1.67% 99.44%, #BE7BFA 0%, rgba(0, 63, 255, 0.57) 23.99%, rgba(1, 12, 39, 0) 66.22%, #010C27 100%), #010C27;',
        'dark-overlay': 'linear-gradient(90deg, #010C27 33.59%, rgba(1, 12, 39, 0.74) 73.48%, rgba(1, 12, 39, 0) 100%);'
      }
    },
    
  },
  plugins: [],

}