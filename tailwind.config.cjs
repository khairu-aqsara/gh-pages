/** @type {import('tailwindcss').Config} */
var defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Mono"].concat(defaultTheme.fontFamily.sans),
        title: ["Merriweather", "PT Mono"].concat(defaultTheme.fontFamily.sans),
      },
    },
  },
  plugins: [],
};
