const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          dark: '#142926',
          light: '#399c87',
          bright: '#50e3c2'
        },
        gray: {
          dark: '#707877',
          light: '#f2f2f2',
        }
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('third-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`third-child${separator}${className}`)}:nth-child(3)`
        })
      })
    })
  ],
}
