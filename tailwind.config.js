/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        'custom-container': '1240px',
      },
      colors: {
        primary: 'FFFFFF',
        secondary: 'F0F0F0'
      }
    },
  },
  plugins: [],
};
