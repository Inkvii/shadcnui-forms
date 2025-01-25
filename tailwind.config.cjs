const plugin = require("tailwindcss/plugin")

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["selector"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addVariant }) {
      // after support is added, use: `@custom-variant header (&:is(h1,h2,h3,h4,h5) *);`
      addVariant("header", ":is(h1,h2,h3,h4,h5)")
    }),
    plugin(function ({ matchUtilities }) {
      // after support is added, use:
      // @utility h-dvh-* {
      //   height: --value(integer)dvh;
      // }
      matchUtilities(
        {
          "h-dvh": (value) => ({
            height: `${value}dvh`,
          }),
        },
        {
          values: {
            0: "0",
            25: "25",
            50: "50",
            75: "75",
            100: "100",
          },
        }
      )
    }),
    plugin(function ({ matchUtilities }) {
      matchUtilities(
        {
          "grid-fit": (value) => ({
            gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
          }),
          "grid-fill": (value) => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
          }),
        },
        {
          values: {
            15: "15rem",
            20: "20rem",
            25: "25rem",
            30: "30rem",
            35: "35rem",
            40: "40rem",
          },
        }
      )
    }),
  ],
}
