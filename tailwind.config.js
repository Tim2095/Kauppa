/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'FFFFFF',
        secondary: 'F0F0F0',
        assent: 'F0EEED',
        dark: '000000',
        saleRed: 'FF3333'
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],  // Custom name for Anton
        dmSans: ['DM Sans', 'sans-serif'], // Custom name for DM Sans
      },
    },
  },
  plugins: [],
};
