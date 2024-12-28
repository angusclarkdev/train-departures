/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      surface: "#2E2E2E",
      primary: "#E0E0E0",
      secondary: "#B0B0B",
      accent: "#FF8C42",
      border: "#3A3A3A",
      hover: "#383838",
      warning: "#CF6679",
    },
  },
  plugins: [],
};
