/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customDiablo: ['Bildad', 'monospace'],
        customSource: ['"Source Sans 3"', 'sans-serif'],
        customNoto: ['"Noto Serif"', 'sans-serif']
      },
    },
  },
  plugins: [],
})

