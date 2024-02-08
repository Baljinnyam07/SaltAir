/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/subsets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    laptop: "1815px",
    // => @media (min-width: 1024px) { ... }

    desktop: "1920px",
    // => @media (min-width: 1280px) { ... }
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial-md":
          "radial-gradient(450px at calc(100% - 600px) 400px, var(--tw-gradient-stops))",
        "gradient-radial":
          "radial-gradient(450px at calc(50%) 200px, var(--tw-gradient-stops))",
        "gradient-radial-left":
          "radial-gradient(400px at 300px, var(--tw-gradient-stops))",
        "gradient-radial-bottom":
          "radial-gradient(400px, var(--tw-gradient-stops))",
        "gradient-radial-center":
          "radial-gradient(50vw, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "abhaya-libre": ['"Abhaya Libre Medium"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
