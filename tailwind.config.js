/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mainlayout: "#1b1b1b",
      },
      minHeight: {
        mainlayout: "calc(100vh - 8.6rem)",
        "mainlayout-mobile": "calc(100vh - 6rem)",
      },
    },
  },
  plugins: [],
}
