/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px #1a75ff',
        },
        '.text-fill-transparent': {
          'color': 'transparent',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
