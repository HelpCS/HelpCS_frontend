import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      yellow: "#FDC453",
      green: "#0BB3A1",
      grey100: "#E8E8EF",
    },
    fontWeights: {
      xs: 300,
      sm: 400,
      md: 500,
      lg: 700,
    },
  },
});
