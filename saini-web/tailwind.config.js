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
        'pop': ['poppins'],
        'teko': ['Teko']
      },
      colors:{
        'orange': '#f3933c',
      },
      fontSize:{
        '10xl':'9rem',
      },
      maskImage:{
        'dot-pattern': 'url("assets/icons/dot.svg")',
      },
      spacing:{
        '148':'38rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.mask-dot-pattern': {
          maskImage: 'url("assets/icons/dot.svg")',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

