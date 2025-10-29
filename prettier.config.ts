import { createRequire } from "module";

const require = createRequire(import.meta.url);
const tailwindcss = require("prettier-plugin-tailwindcss");

const config = {
  plugins: [tailwindcss],
};

export default config;
