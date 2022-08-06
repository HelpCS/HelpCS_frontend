import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
    },
    fontWeights: {
      xs: 300,
      sm: 400,
      md: 500,
      lg: 700,
    },
  },
});
