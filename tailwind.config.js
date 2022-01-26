// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: {
        50: "#f8fafc",
        100: "#ccd6f6",
        200: "#8892b0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#122240",
        900: "#0b192f",
      },
      green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#64ffda",
        500: "#48f5cb",
        600: "#058063",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
    },

    extend: {},
  },
  // eslint-disable-next-line no-undef

  plugins: [require("@tailwindcss/typography")],
};
