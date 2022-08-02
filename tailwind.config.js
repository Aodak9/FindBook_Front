/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cream: {
          100: '#faf8f2',
          200: '#f0ede5',
          300: '#c9af7f'
        },
        greyBlack: {
          100: '#d3d3d3',
          200: '#747474',
          300: '#444444',
          400: '#060606',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
