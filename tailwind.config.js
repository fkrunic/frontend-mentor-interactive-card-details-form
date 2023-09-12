/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    colors: {
      'lg-input-start': 'hsl(249, 99%, 64%)',
      'lg-input-end': 'hsl(278, 94%, 30%)',
      red: 'hsl(0, 100%, 66%)',
      white: 'hsl(0, 0%, 100%)',
      'light-grayish-violet': 'hsl(270, 3%, 87%)',
      'dark-grayish-violet': 'hsl(279, 6%, 55%)',
      'very-dark-violet': 'hsl(278, 68%, 11%)'
    },
    fontFamily: {
      'space-grotesk': 'Space Grotesk, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

