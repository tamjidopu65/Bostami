/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto Slab', 'serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
      }
    },
    extend: {
      backgroundImage: {
        'banner-dark': "url('/images/bg-dark.jpg')",
        'banner-light': "url('/images/bg-light.jpg')",
        'linear-color': "linear-gradient(to right, #FA5252, #DD2476)",
        'linear-color-hover': "linear-gradient(to left, #FA5252, #DD2476)",
      },
      colors: {
        'light-gray': '#F3F6F6',
      },
    },
  },
  plugins: [],
}
