/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      sidebar: "#1E2640",
      selected: "#FFFFFF1A",
      credit: "#353C53",
      currentCard: "#146EB4",
      currentCardNextPayout: "#0E4F82",
      successful: "#17B31B",
      white : "#FFFFFF",
      black : "#1A181E",
      grey :"#F2F2F2",
      outlineGrey:"#D9D9D9"
    },
    extend: {
      fontFamily :{
        inter : ['Inter']
      }
    },
  },
  plugins: [],
};
