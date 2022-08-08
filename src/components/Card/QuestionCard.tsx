import { styled } from "../../../stitches.config";
import Ox from "../Ox";

function QuestionCard() {
  return (
    <StyledSize>
      <div>
        <StyledCategory>카테고리</StyledCategory>
      </div>
      <StyledQuestion>문제 제목</StyledQuestion>
      <Ox />
    </StyledSize>
  );
}

export default QuestionCard;

const StyledSize = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "$white100",
  borderRadius: "10px",
  boxShadow: "2px 2px 12px 2px rgb(0 0 0 / 8%)",

  width: "100%",
  minHeight: "20rem",
  height: "auto",
  padding: "1rem 0",
});

const StyledCategory = styled("span", {
  fontWeight: "$lg",
  opacity: 0.9,
  fontSize: "1rem",
  color: "$yellow",
});

const StyledQuestion = styled("span", {
  width: "80%",
  fontWeight: "$md",
  opacity: 0.85,
  fontSize: "1.5rem",
  marginTop: "1rem",
  marginBottom: "5.5rem",
});
