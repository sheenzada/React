import { plugin } from 'postcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     ".src       *.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugin:[],
// }