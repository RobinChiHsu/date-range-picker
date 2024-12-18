/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "390px",
        "1xs": "550px",
        "1sm": "650px",
        "1md": "850px",
        "1lg": "1023px",
        "1xl": "1280px",
        "2xl": "1439px",
        "3xl": "1536px",
        "4xl": "1680px",
        "5xl": "1921px",
        "6xl": "2559px",
      },
      animation: {
        pulse3s: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        pulse4s: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse3s: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        pulse4s: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      colors: {
        text: "#002136",
      },
    },
  },
  plugins: [],
};

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xs": "390px",
        "1xs": "550px",
        "1sm": "650px",
        "1md": "850px",
        "1lg": "1023px",
        "1xl": "1280px",
        "2xl": "1439px",
        "3xl": "1536px",
        "4xl": "1680px",
        "5xl": "1921px",
        "6xl": "2559px",
      },
      animation: {
        pulse3s: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        pulse4s: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse3s: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        pulse4s: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      colors: {
        text: "#002136",
      },
    },
  },
  plugins: [],
});
