/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'header-bg': '#DCD7C9',
        'header-text': '#A27B5C',
        'anchor-bg': '#A27B5C',
        'body-bg': '#3F4E4F',
        'text-color': '#ebebeb',
        'footer-bg': '#2C3639'
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '991px',
        'xl': '1124px',
        '2xl': '1124px'
      }
    },
    fontFamily: {
      Nunito: ['Nunito', 'sans-serif']
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
