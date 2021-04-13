module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      cus: "20px 20px 40px -6px rgba(0, 0, 0, 0.2)",
      cus1: "4px 4px 6px rgba(0, 0, 0, 0.1)",
      cus2: "4px 4px 45px 8px  rgba(255, 255, 255, 0.1)",
      cus3: "15px 15px 15px rgba(0, 0, 0, 0.1)",
    },
    fontFamily: {
      heading: ["nunito"],
      rubik: ["Rubik"],
      josefin: ['"Josefin Sans"'],
    },
    textShadow: {
      1: "2px 4px 4px rgba(0, 0, 0, 0.2)",
      2: "2px 2px 4px rgba(0, 0, 0, 0.4)",
      none: "0 0 0 rgba(0, 0, 0, 0)",
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["group-focus"],
      fontWeight: ["hover"],
    },
    textShadow: ["hover", "active"],
  },
  plugins: [require("tailwindcss-textshadow")],
};
