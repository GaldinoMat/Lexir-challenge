/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '420px',
      md: '768px',
      xl: '1280px',
      desktop: '1919px',
    },
    extend: {},
  },
  plugins: [],
}
