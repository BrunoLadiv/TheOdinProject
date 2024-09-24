import typography from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              marginTop: theme("spacing.2"), // Adjust top margin
              marginBottom: theme("spacing.4"), // Adjust bottom margin
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
