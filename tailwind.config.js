/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "call-action": "#E6E65C",
        secondary: "#4D4D4D",
        "primary-button": "#E6E6E6",
        "call-action-text": "#1A1A1A",
      },
    },
  },
  plugins: [],
};
