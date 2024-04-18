/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FF6F61',
          200: '#dd5147',
          300: '#8f0010',
        },
        accent: {
          100: '#FFD166',
          200: '#957200',
        },
        text: {
          100: '#333333',
          200: '#5c5c5c',
        },
        bg: {
          100: '#F7F7F7',
          200: '#ededed',
          300: '#c4c4c4',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
