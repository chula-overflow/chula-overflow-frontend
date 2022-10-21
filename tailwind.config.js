const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cuof-grey-01": "#FAFAFA",
        "cuof-grey-02": "#666666",
        "cuof-grey-03": "#413A43",
      },
      backgroundImage: {
        "cuof-gradient-h": "linear-gradient(90deg, #FFC83A 2.5%, #FF7C32 11.5%, #FF008C 43.5%)",
        "cuof-gradient-v": "linear-gradient(180deg, #FFC83A 2.5%, #FF7C32 11.5%, #FF008C 43.5%)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Fira Sans", "Noto Sans Thai", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
