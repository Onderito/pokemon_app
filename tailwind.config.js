/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,css,html}"],
  theme: {
    extend: {
      fontFamily: {
        abc: ["Josefin Sans", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },

  plugins: [],
};
