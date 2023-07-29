/** @type {import('tailwindcss').Config} */
export default {
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
      borderWidth: {
        1: '1px',
        3: '3px',
      },
      width: {
        42: '168px',
      },
    },
  },
  plugins: [],
}
