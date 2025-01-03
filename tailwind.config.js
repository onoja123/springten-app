/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "surface-color": "#242424",
        "call-action": "#E6E65C",
        secondary: "#4D4D4D",
        "primary-button": "#E6E6E6",
        "call-action-text": "#1A1A1A",
        "text-link": "#8181E6",
        "alert-success": "#5CE677",
      },
    },
  },
  plugins: [],
};
