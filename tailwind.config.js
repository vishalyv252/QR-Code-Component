/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "White": "hsl(0, 0%, 100%)",
        "Light_gray": "hsl(212, 45%, 89%)",
        "Grayish_blue": "hsl(220, 15%, 55%)",
        "Dark_blue": "hsl(218, 44%, 22%)"
      },
      fontFamily: {
        "Outfit": ["Outfit", "sans-serif"],
      },
      screens: {
        "Small_Mobiles_Size_View": {"max": "374px"}
      }
    },
  },
  plugins: [],
}

