/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "3.8em",
        h2: "3.1em",
        h3: "2.4em",
        h4: "1.9em",
        h5: "1.6em",
        h6: "1.3em",
        regular: "1em",
        sm: "0.8em",
        xs: "0.6em",
      },
      lineHeight: {
        sm: "100%",
        regular: "120%",
        lg: "160%",
      },
    },
  },
  plugins: [],
};
