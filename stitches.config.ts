import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      black100: "#202123",
      black700: "#1C1C1C",
      red: "#D7111E",
      yellow: "#FDC453",
      yellow100: "#FFF3D4",
      green: "#008000",
      pastelGreen: "#7BB68B",
      grey100: "#EDEDEF",
    },
    fontWeights: {
      xs: 300,
      sm: 400,
      md: 500,
      lg: 700,
    },
  },
});
