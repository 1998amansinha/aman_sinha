// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-black": "#181717",
        "main-gray": "#606060",
        "main-white": "#f3f3f3",
        secondary: "#2429af",
      },
      fontSize: {
        sm: "0.875rem",
        base: "1.125rem",
        lg: "1.3125rem",
        xl: "2rem",
        "2xl": "3.75rem",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "rounded-0": "0rem",
      },
    },
  },
  plugins: [],
};
