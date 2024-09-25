/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(35,255,0,1) 0%, rgba(30,218,0,1) 0%, rgba(33,238,0,0.7540266106442577) 0%, rgba(25,111,0,0.8016456582633054) 100%, rgba(0,212,255,1) 100%)',
      }
    },
  },
  plugins: [],
}

