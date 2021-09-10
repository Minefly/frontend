const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // Used in conjunction with next-themes
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.pink,
        violet: colors.violet,
      },
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
      },
      height: {
        200: "50rem",
      },
    },
    fontFamily: {
      sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
