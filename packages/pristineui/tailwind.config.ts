import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./src/**/*.stories.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;

export default config;
