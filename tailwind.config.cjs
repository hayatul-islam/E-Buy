/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2bbef9",
        secondary: "#233a95",
        success: "#00b853",
        warning: "#ffcd00",
        danger: "#d51243",
        info: "",
      },
    },
  },
  plugins: [],
};
