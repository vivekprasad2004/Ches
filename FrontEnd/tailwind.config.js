/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#efe2fe",
        background: "#16022c",
        primary: "#88f514",
        secondary: "#022c16",
        accent: "#81f00a",
      },
    },
  },
  plugins: [],
};
