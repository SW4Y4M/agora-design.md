/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./design.md", "./README.md"],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#00C2FF",
          blue: "#075C9A",
          "cyan-light": "#A0FAFF",
          violet: "#C46FFB",
          "violet-dark": "#9443C7",
        },
        neutral: {
          950: "#0F0F0F",
          900: "#171717",
          800: "#2C2C2C",
          700: "#484848",
          600: "#626262",
          400: "#B3B3B3",
          300: "#D6D6D6",
          200: "#E7E6E6",
          100: "#F1F0F0",
          50: "#FCF9F8",
        },
      },
      fontFamily: {
        brand: ["Jokker", "sans-serif"],
        sans: ["Instrument Sans", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
