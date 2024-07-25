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
      secondary: "#54545C",
      "gray-100": "#F2F2F3",
      "gray-200": "#E5E5E6",
      "gray-300": "#D4D4D8",
    },
    extend: {
      dropShadow: {
        card: "0 0px 24px rgba(22, 22, 22, 0.08)",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
export default config;
