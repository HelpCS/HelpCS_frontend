import { styled } from "../../../stitches.config";

function Ox() {
  return (
    <StyledSize>
      <StyledButton answer="true">O</StyledButton>
      <StyledButton answer="false">X</StyledButton>
    </StyledSize>
  );
}

export default Ox;

const StyledSize = styled("div", {
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  gap: "2.5rem",
  fontWeight: "$lg",
  fontSize: "5.3rem",
  bottom: -5,
  right: "2rem",
});

const StyledButton = styled("button", {
  color: "$grey100",

  variants: {
    answer: {
      true: {
        "&:hover": {
          color: "$green",
          transition: "all 0.3s",
        },
      },
      false: {
        "&:hover": {
          color: "$red",
          transition: "all 0.3s",
        },
      },
    },
  },
});
