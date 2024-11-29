/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'text-gradient': 'linear-gradient(90deg, #4A00E0, #8E2DE2)',
    },},
  },
  plugins: [require('daisyui'),],
}

