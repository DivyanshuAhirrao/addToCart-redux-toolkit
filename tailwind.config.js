/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // Define the custom breakpoint for xs size
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}