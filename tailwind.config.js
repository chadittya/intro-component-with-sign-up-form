/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-pattern": "url('/bg-intro-desktop.png')",
        "mobile-pattern": "url('/bg-intro-mobile.png')",
      },
    },
  },
  plugins: [],
};
