/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      screens: {
        vsm: "400px",
        xmd: "800px",
      },
    },
  },
  plugins: [],
};
