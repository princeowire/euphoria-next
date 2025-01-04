/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "eu-purple": "#8A33FD",
        "off-gray": "#7F7F7F",
        "text-fill": "#807D7E",
        "off-black": "#3C4242",
        "contrast-yellow": "#FBD103",
        "footer-bg": "#3C4242",
      },
    },
  },
  plugins: [],
};
