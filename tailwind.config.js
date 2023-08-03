/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "390px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        homeItem: "#004E6E",
        paragraph: "#6C737A",
        navBorder: "#e5e7eb",
        headers: "#619DBF",
        buttonsblogs: "#EBEFF1",
        buttondesc: "#001D29",
        designer: "#619DBF",
        blogsparagraph: "#3C3C3C",
        bgteachers: "#F5F5F7",
        teachersbg: "#F5F5F7",
        listteacher: "#3B4C68",
        inputborder: "#91A9B766",
        inputtext: "#91A9B7",
        footerbg: "#00374E",
        footerinput: "#FFFFFF66",
      },
    },
  },
  plugins: [],
};
