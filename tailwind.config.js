/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-forga': '#0b0c10',
        'turquoise-blue': '#66FCF1',
        gunmetal: '#1F2833',
        silversand: '#c5c6c7',
        'cadet-blue': '#45A29E',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
