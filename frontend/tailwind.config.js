/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mango: '#FFA500',
      },
      padding: {
        pt : '10px',
        pr : '10px',
        pl : '10px',
        pb : '10px'
      },
      margin: {
        mt : '10px',
        mr : '10px',
        ml : '10px',
        mb : '10px'
      },
      fontFamily: {
        roboto: ['sans-serif'],
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // scroll halfway (since it's duplicated)
        },
      },
  },
},
  plugins: [],
}