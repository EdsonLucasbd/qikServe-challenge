/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          dark: '#121212',
          'dark-gary': '#464646',
          'light-gray': '#5F5F5F',
          'background-gray': '#DADADA',
        }
      }
    },
  },
  plugins: [],
}

