module.exports = {
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        accent: ['2px solid #F59E0B', '1px'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
