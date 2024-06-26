/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat Alternates', 'sans-serif'],
        'eb': ['ebson'],
        'leo': ['leoprid'],
        'pop': ['poppins']
      },
      colors:{
        'orange': '#f3933c',
      },
    },
  },
  plugins: [],
}

