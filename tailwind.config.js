/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray-darkest": "#121212",
        "custom-gray-dark": "#1b1b1b",
        "custom-gray-light": "#242424",
        "custom-gray-lightest": "#2d2d2d",
      },
    },
  },
  plugins: [],
}
