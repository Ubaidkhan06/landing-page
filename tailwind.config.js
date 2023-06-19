/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      primaryBlue: "#1C1E53",
      white : "#ffff"
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#108093",

          secondary: "#f7f1a5",

          accent: "#0da6e2",

          neutral: "#1C1E53",

          "base-100": "#FFFF",

          info: "#6586D2",

          success: "#56DCA4",

          warning: "#FCD980",

          error: "#DC323B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
