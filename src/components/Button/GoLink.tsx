import { MouseEvent } from "react";
import { styled } from "../../../stitches.config";

interface Props {
  onClickFirst: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickTwo: (e: MouseEvent<HTMLButtonElement>) => void;
  firstSummary: string;
  secondSummary: string;
}

function GoLink({ onClickFirst, onClickTwo, firstSummary, secondSummary }: Props) {
  return (
    <StyledSize>
      <StyledItemWrapper>
        <StyledButton onClick={onClickFirst}>{firstSummary}</StyledButton>
        <StyledButton onClick={onClickTwo}>{secondSummary}</StyledButton>
      </StyledItemWrapper>
    </StyledSize>
  );
}
export default GoLink;

const StyledSize = styled("div", {
  position: "relative",
  marginTop: "9%",
  width: "100%",
});

const StyledItemWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
});

const StyledButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  width: "40%",
  height: "4rem",
  fontWeight: "$lg",
  backgroundColor: "$yellow",
  opacity: 0.8,
  marginBottom: "0.85rem",
});
