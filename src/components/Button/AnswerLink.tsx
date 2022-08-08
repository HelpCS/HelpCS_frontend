import Link from "next/link";
import { styled } from "../../../stitches.config";

function AnswerLink() {
  return (
    <>
      <StyledSize>
        <StyledItemWrapper>
          {/* 문제 해설 링크로 이동합니다. */}
          <Link href="/">
            <a>
              <StyledButton>잘 모르겠어요</StyledButton>
            </a>
          </Link>
          <Link href="/">
            <a>
              <StyledButton>다른 문제 풀고 싶어요</StyledButton>
            </a>
          </Link>
        </StyledItemWrapper>
      </StyledSize>
    </>
  );
}
export default AnswerLink;

const StyledSize = styled("div", {
  position: "relative",
  marginTop: "9%",
  width: "100%",
});

const StyledItemWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "100%",
});

const StyledButton = styled("button", {
  position: "relative",
  textAlign: "center",
  width: "27.2rem",
  borderRadius: "4px",
  height: "4rem",
  fontWeight: "$lg",
  backgroundColor: "$yellow",
  opacity: 0.8,
  marginBottom: "1rem",
});
