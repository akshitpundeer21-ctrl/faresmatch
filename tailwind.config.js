/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C8D400',
        'lime-yellow': '#C8D400',
      },
      fontFamily: {
        'jetbrains': ['JetBrainsMono-Regular'],
        'inter': ['Inter-Regular'],
        'inter-bold': ['Inter-Bold'],
      },
    },
  },
  plugins: [],
}
