import { definePreset } from "@pandacss/dev";

export const polymerPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          red: { value: "#EE0F0F" },
          green: { value: "#0FEE0F" },
        },
      },
      semanticTokens: {
        colors: {
          danger: { value: "{colors.red}" },
          success: { value: "{colors.green}" },
        },
      },
    },
  },
});
