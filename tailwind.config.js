const { safeList } = require('./dist/js/utils/safelist.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: process.env.NODE_ENV === 'production' ? safeList : [],
  content:
    process.env.NODE_ENV === 'production'
      ? [{ raw: '' }]
      : ['./src/docs/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [require('./dist/js')]
}
