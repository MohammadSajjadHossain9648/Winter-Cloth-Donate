/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green_color: '#4A7C59 ',
      }
    },
  },
  plugins: [require('daisyui'),],
}

