module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        b612: ["B612", "sans-serif"],
        concertOne: ["Concert One", "cursive"],
        playfair: ["Playfair Display"],
        albra: ["Albra"],
        coromorant: ["Cormorant Garamond"],
        sourceSansPro: ["Source Sans Pro"],
      },
      colors: {
        black: "#333232",
        lightBlack: "#757575",
        green: {
          50: "#DEF4E2",
          100: "#CBEED0",
          200: "#A5E1AE",
          300: "#7FD48C",
          400: "#58C869",
          500: "#3BB24D",
          600: "#2E8C3C",
          700: "#22652C",
          800: "#153F1B",
          900: "#08190B",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
