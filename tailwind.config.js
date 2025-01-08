/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1117B1",
        "light-purple": "#FAFAFF",
        "med-purple": "#F1F1FF",
        "dark-purple": "#8C8FD6"
      },

      fontFamily: {
        title: ['Mangiola, sans-serif'],
        body: ['SF Compact Thin, sans-serif'],
        boldbody: ['SF Compact Regular, sans-serif']
      }
    },
  },
  plugins: [],
};


