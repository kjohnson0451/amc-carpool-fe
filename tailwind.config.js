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
        "custom-purple-dark": "#2e1a47",
        "custom-purple-link-hover": "#797fff",
      },
      screens: {
        sm: "400px",
        md: "640px",
      },
    },
  },
  plugins: [],
}
