/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-white": "#F6F9FC",
        "sec-white": "#FDFDFD",
        "main-blue": "#2694B7",
        "sec-blue": "#D4EAF166",
        "main-gray": "#ABB4BE",
        "sec-gray": "#DEE2E6",
        "desc-gray": " #738496",
        "paragraph-blue": "#455B73",
        "title-blue": "#163250",
        "input-active-blue": "#264195",
      },
    },
  },
  plugins: [],
};
