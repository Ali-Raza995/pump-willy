/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      monts: ["Montserrat"],
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        lLap: { max: "1440px" },
        lap: { max: "1024px" },
        tab: { max: "800px" },
        lMob: { max: "500px" },
        mMob: { max: "390px" },
        sMob: { max: "350px" },
      },
    },
  },
  plugins: [],
};
