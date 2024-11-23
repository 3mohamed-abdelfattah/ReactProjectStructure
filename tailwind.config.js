/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#89A8B2",
        secondaryText: "#B3C8CF",
        primaryBackground: "#F1F0E8",
        secondaryBackground: "#E5E1DA",
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