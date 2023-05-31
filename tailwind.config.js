/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
        screens: {
          DEFAULT: '1380px'
        },
      },
      screens:{
        '3xl': '1600px'
      },
      fontFamily: {
        'anomalia': ['anomalia'],
      },
      colors: {
        blue: {
          "dark": "#181B31",
          "primary": "#102250",
          900: "#010C27",
          500: "#5E8AFF",
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
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        'dark-900-overlay': 'linear-gradient(180deg, #010C27 0%, #01091C 21.82%, #010C27 100%)',
        'video-overlay-top': 'linear-gradient(90deg, #010C27 16.56%, rgba(1, 12, 39, 0.8596) 29.36%, rgba(1, 12, 39, 0.74) 43.49%, rgba(1, 12, 39, 0.26701) 71.74%, rgba(1, 12, 39, 0) 95.58%)',
        'dark-800-overlay': 'linear-gradient(359.43deg, #010C27 57.61%, rgba(1, 12, 39, 0.6) 59.81%, rgba(1, 12, 39, 0.12) 63.13%, rgba(1, 12, 39, 0) 66.61%)',
        'dark-500-overlay': 'linear-gradient(360deg, #010C27 0%, rgba(1, 12, 39, 0.6) 16.23%, rgba(1, 12, 39, 0.12) 40.79%, rgba(1, 12, 39, 0) 66.59%)',
        'dark-400-overlay': 'linear-gradient(25deg, #BE7BFA 0%, rgba(0, 63, 255, 0.57) 15%, rgba(1, 12, 39, 0) 45%, #010C27 65%), #010C27',
        'dark-overlay': 'linear-gradient(90deg, #010C27 33.59%, rgba(1, 12, 39, 0.74) 73.48%, rgba(1, 12, 39, 0) 100%);',
        'uxi-live-en-default': 'url("../images/uxi-live-EN-default.png")',
        'uxi-live-en-hover': 'url("../images/uxi-live-EN-hover.png")',
        'uxi-live-he-default': 'url("../images/uxi-live-HE-default.png")',
        'uxi-live-he-hover': 'url("../images/uxi-live-HE-hover.png")',
        'pm-live-en-default': 'url("../images/pm-live-EN-default.png")',
        'pm-live-en-hover': 'url("../images/pm-live-EN-hover.png")',
        'pm-live-he-default': 'url("../images/pm-live-HE-default.png")',
        'pm-live-he-hover': 'url("../images/pm-live-HE-hover.png")',
        'com-live-en-default': 'url("../images/com-plex-EN-default.png")',
        'com-live-en-hover': 'url("../images/com-plex-EN-hover.png")',
        'com-live-he-default': 'url("../images/com-plex-HE-default.png")',
        'com-live-he-hover': 'url("../images/com-plex-HE-hover.png")',
        'video-bg-overlay': 'url("../images/video-overlay.png")',
      },

      transitionDuration: {
        '800': '800ms',
      },
      transitionProperty: {
        'bg-image': 'background-image',
      }
    },
    
  },
  plugins: [],

}