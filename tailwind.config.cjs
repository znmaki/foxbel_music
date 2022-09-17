/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-primary':'#E86060',
        'red-second':'#662323',
        'red-third':'#EB5757',
        'light-red':'#FF7676',
        'gray-custze':'#828282',
        'soft-gray':'#BDBDBD',
        'transpa':'rgba(0,0,0,10%)'
      },
    },
  },
  plugins: [],
}
