/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    screens: {
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'},
    },
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        black: '#0B0C10',
        gray: '#1F2833',
        pink: '#C5C6C7',
        green: '#66FCF1',
        dgreen: '#45A29E'
      }
    },
  },
  plugins: []
}
