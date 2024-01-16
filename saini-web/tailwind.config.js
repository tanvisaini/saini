/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat Alternates', 'sans-serif'],
        'eb': ['ebson']
      }
    },
  },
  plugins: [],
}
