/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Acumin", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
