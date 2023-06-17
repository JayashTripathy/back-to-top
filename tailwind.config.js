/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(18, 18, 18)",
        secondary: "rgb(244, 244, 244)",

        highlighting: "rgb(112, 36, 255)",
      },
    },
  },
  plugins: [],
};
