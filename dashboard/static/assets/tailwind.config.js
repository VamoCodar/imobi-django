const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    '../../../autenticacao/templates/*.{html,js}',
    '../../../templates/*.{html,js}'
  ],
  theme: {
    fontFamily: {
      'base': ['Catamaran', "sans-serif"],
      'logo': ['Jost', "sans-serif"]
    },
    extend: {
      // spacing: {
      //   '16': '1rem',

      // },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    // plugin(function ({ addComponents }) {
    //   addComponents({
    //     '.btn': {
    //       padding: '.5rem 1rem',
    //       borderRadius: '.25rem',
    //       fontWeight: '600',
    //     },
    //     '.btn-blue': {
    //       backgroundColor: '#3490dc',
    //       color: '#fff',
    //       '&:hover': {
    //         backgroundColor: '#2779bd'
    //       },
    //     },
    //     '.btn-red': {
    //       backgroundColor: '#e3342f',
    //       color: '#fff',
    //       '&:hover': {
    //         backgroundColor: '#cc1f1a'
    //       },
    //     },
    //   })
    // })
  ],
}