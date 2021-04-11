const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      primary: '#7B6D8D',
      secondary: '#EEA888',
      secondaryLight: '#AA9DBB',
      ...colors
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
