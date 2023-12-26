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
        bwhite: '#EFFCEB',
        black: '#112D32',
        gray: '#f1f0eb',
        brown: '#4F4A41',
        lgreen: '#88BDBC',
        dblue: '#254E58'
      },
    },
    
  },
  plugins: []
}
