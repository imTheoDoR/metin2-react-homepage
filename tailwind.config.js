/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            dark: "#0f0a1a",
            white: "#afa4c4",
            white2: "#544b64",
            gold: "#e0b961",
            dark2: "#1c1725",
            red: colors.red,
            green: colors.green,
        },
    },
    plugins: [],
};
