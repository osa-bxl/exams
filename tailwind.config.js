/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "main-c": "#4461F2",
        "dark-blue": "#122D9C"
      },
      lineHeight: {
        'xl': '40px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

