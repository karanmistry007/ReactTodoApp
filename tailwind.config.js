/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx,vue,js,ts}"],
  theme: {
    extend: {
      screens: {
        // xsss: "0px", //0 to 160px
        // xss: "160px", //160 to 320
        xs: "320px",
        // sm: "640px",
        // md: "768px",
        // lg: "1024px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
}

