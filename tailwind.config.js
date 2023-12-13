/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")

export default withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray-darkest": "#121212",
        "custom-gray-dark": "#1b1b1b",
        "custom-gray-light": "#242424",
        "custom-gray-lightest": "#2d2d2d",
      },
      minHeight: {
        mainlayout: "calc(100vh - 8.6rem)",
        "mainlayout-mobile": "calc(100vh - 6rem)",
      },
    },
  },
  plugins: [],
})
