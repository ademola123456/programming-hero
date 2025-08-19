const config = {
  plugins: ["@tailwindcss"],
};
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
