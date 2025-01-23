/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neon: "#00e6e6",
        "neon-dark": "#00cccc",
        red: "#ff5555",
      },
    },
  },
  plugins: [],
};
