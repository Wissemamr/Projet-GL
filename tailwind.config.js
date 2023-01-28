/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'myGreen':'#1A906B',
        'myRed':'#ED4459',
        'myBlue':'#0075FD',
        'myLightGreen':'#E9F8F3',
        'myLightBlue':'#E0EEFF',
        'myLightRed':'#FFEEF0',
        'justGray':'#E7E9EB'
      },
    },
  },
  plugins: [],
}
