/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  // Optional: Configure daisyUI themes
  daisyui: {
    themes: ['light', 'dark', 'cupcake'], // Add your preferred themes here
  },
}
