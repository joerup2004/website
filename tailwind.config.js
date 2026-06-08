/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-2200px))' }, // Adjust this based on the total width of your images
        },
        scrollReverse: {
          '0%': { transform: 'translateX(calc(-2200px))' },
          '100%': { transform: 'translateX(0)' }, // Adjust this based on the total width of your images
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      animation: {
        scroll1: 'scroll 35s linear infinite',
        scroll2: 'scrollReverse 35s linear infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      fontFamily: {
        'literata': ["Literata", "serif"],
      },
    },
  },
  plugins: [],
}