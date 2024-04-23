/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'custom-brown': '#A27B5C',
        'custom-dark': '#273131',
        'custom-light': '#DCD7C9',
      },
    },
  },
  plugins: [],
}

