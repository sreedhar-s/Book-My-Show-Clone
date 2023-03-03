/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bms: {
          50: "#edf1fc",
          100: "#F5F5F5",
          200: "#b6b8c9",
          300: "#989bb2",
          400: "#7c7f9b",
          500: "#636582",
          600: "#4c4f66",
          700: "#363849",
          800: "#2B3149",
          900: "#0a0a16",
        },
      },
    },
  },
  plugins: [],
};

