/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    './src/js/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
