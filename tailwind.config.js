/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Root HTML file
    './src/**/*.{js,ts,jsx,tsx}', // All JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'], // Define Gilroy font family
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
};