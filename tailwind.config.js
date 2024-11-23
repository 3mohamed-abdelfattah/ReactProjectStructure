/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#FFFFFF",
        secondaryText: "#A64D79",
        primaryBackground: "#1A1A1D",
        secondaryBackground: "#3B1C32",
      },
      screens: {
        '2xl': '1536px',
        xl: "1280px",
        lg: "1024px",
        md: "868px",
        sm: "640px",
        vsm: "460px",
        tiny: "360px",
      },
    },
  },
  plugins: [],
}