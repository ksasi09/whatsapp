/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00af9c",
        textPrimary: "#d4d5d7",
        textAccent: "#f1f1f2a1",
        chatOutgoing: "#054740",
        backgroundDark: "#262d31",
        backgroundDarkExtra: "#131c21",
        backgroundNav: "#2a2f32",
        background: "#30383d",
      },
      spacing: {
        13: "3.6875rem",
        33: "8.75rem",
        chatListScreen: "36.9375rem",
      },
      maxHeight: {},
      maxWidth: {
        chatNav: "25.61325rem",
        chatInterface: "59.7626875rem",
      },
    },
  },
  plugins: [],
};
