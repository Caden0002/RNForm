/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      screens: {
        'sm': '576px',
        'md': '1280px',
        'lg': '1440px',
        'xl': '1900px',
      },

      fontFamily: {
        BG: ['Bricolage Grotesque', 'sans-serif'],
      },

      colors: {
        // Define your color variables here
        textColorPrimary: '#000000',
        textColorSecondary: '#ff90e7',
        textColorTertiary:  '#6b6b6b',
        textColorQuaternary:  '#9ca3af',


        backgroundColorPrimary: '#f2e0d6',
        backgroundColorSecondary: '#dbe4ee',
        backgroundColorTertiary: '#faedfc',
        backgroundColorQuaternary:  '#fedb26',
        backgroundColorQuinary: '#f7f4ee',


      },

    },
  },
  plugins: [],
};