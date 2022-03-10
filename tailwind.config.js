module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      neutral: '#f5f5f5',
      red: '#da1c5c',
      'primary--gray': '#58595b',
      'secondary--gray': '#898989',
      'light--gray': '#dcdcdc',
      black: '#191919',
    },
    fontFamily: {
      mono: ['PT Mono', 'monospace'],
      sans: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
