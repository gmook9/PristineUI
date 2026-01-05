export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // important: scan the installed package output
    "./node_modules/@gmook9/pristine-ui/dist/**/*.{js,mjs}",
  ],
  theme: { extend: {} },
  plugins: [],
};
