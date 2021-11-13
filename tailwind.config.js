
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'almost': 'calc(-5.5rem + 100vh)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
