/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './client/**/*.[tj]sx'],
  theme: {
    extend: {
      colors: {
        Header: '#F6F6F7',
        Fontcolour: '#222222',
        Fontcolour: '#888888',
        RequiredStar: '#C90000',
        BorderLightGrey: '#CCCCCC',
        BorderDarkGrey: '#222222',
      },
      fontFamily: {
        display: ['Cascadia Mono'],
        body: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
}
