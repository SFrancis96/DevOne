const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        'do-dark-purple': '#020206',
        'do-blue': '#1648ED',
        'do-purple': '#BE14F9',
        'do-rose': '#EC83C2',
        'do-white': '#F8F8FF',
      },
      hueRotation: {
        280: '280deg'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
