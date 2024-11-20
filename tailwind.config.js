/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white_color: 'rgb(255,255,255)',

        green_color: '#4A7C59 ',
      }
    },
  },
  plugins: [require('daisyui'),],
}

