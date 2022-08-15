/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    containerQuery: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    containerType: {
      size: "inline-size",
    },
  },
  plugins: [require("tailwindcss-container-query")],
};
