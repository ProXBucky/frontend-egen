/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // 'media' hoặc 'class'
  theme: {
    extend: {
      colors: {
        lightBgSideBar: '#f9f9f9',
        lightBgNav: '#ececec',
        darkBgNav: '#171717',
        lightBg: 'white',
        lightBg1: '#f4f4f4',
        lightText: 'black',
        darkBg: '#212121',
        darkBg1: '#2f2f2f',
        darkText: 'white',
      },
    },
  },
  plugins: [],
}
