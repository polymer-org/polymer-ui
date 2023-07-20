import { defineConfig } from "@pandacss/dev";
import { polymerPreset } from "./polymer-preset";

export default defineConfig({
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda", polymerPreset],
  preflight: true,
  include: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
});
