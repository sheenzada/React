// import { plugin } from 'postcss'

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/index.html","./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   content: [
//     ".src       *.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugin:[],
// }


// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        colorRotate: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
      },
      animation: {
        colorRotate: "colorRotate 5s linear infinite",
      },
    },
  },
  plugins: [],
};
