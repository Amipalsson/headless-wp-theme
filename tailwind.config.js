/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#d9b08c',
      secondary: '#111827',
    } ,
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif', 'system-ui'],
  }, 
  },
  plugins: [],
}
