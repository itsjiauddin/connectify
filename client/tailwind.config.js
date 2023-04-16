/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: {
          1: "#ffffff",
          2: "#e5e7eb",
          3: "#60a5fa",
        },
        secondary: {
          1: "#111827",
          2: "#4b5563",
        },
        text: "#374151",
      },
      fontSize: {
        h1: "24px",
        h2: "18px",
        h3: "16px",
        p: "14px",
      },
    },
  },
  plugins: [],
};
