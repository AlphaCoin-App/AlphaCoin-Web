/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind looks at all relevant files
    "./public/index.html", // Include your main HTML file as well
  ],
  theme: {
    // colors: {
    //   sky: "#e0f2fe",
    // },
    extend: {},
  },
  plugins: [],
};
