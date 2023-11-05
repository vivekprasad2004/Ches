/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#0d2306",
        background: "#f1fcee",
        primary: "#3ca61c",
        secondary: "#d8f7cf",
        accent: "#4ed624",
      },
    },
  },
  plugins: [],
};
