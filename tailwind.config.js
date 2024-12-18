/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        colorShift: {
          "0%, 100%": { color: "#16a34a" }, // green-600
          "50%": { color: "#ffffff" }, // white
        },
      },
      animation: {
        colorShift: "colorShift 15s infinite ease-in-out",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"]
    }
  },
  plugins: [],
}