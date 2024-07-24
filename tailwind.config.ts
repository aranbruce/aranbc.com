import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#161616",
      secondary: "rgba(22, 22, 22, 0.7)",
      tertiary: "rgba(22, 22, 22, 0.08)",
      "gray-100": "#F2F2F3",
      "gray-200": "rgba(22, 22, 22, 0.2)",
    },
    extend: {
      dropShadow: {
        card: "0 0px 24px rgba(22, 22, 22, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
