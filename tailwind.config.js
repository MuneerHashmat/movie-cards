/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'my-custom-shadow': '-1px 2px 50px -7px rgba(0,0,0,0.75)',
      },
    },
  },
  plugins: [],
}

