/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky : '#89ABE3FF',
        white2: '#FCF6F5FF',
        cherry: '#990011FF',
      },
      
    },
  },
  plugins: [],
}
