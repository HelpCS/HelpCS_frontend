import { styled } from "../../stitches.config";
import Link from "next/link";
import LottieWrapper from "../components/Common/LottieWrapper";
import bgLottie from "../assets/lottieJSON/notFound.json";

function NotFound() {
  return (
    <StyledPadding>
      <StyledItemWrapper>
        <StyledLottie>
          <LottieWrapper lottieData={bgLottie} />
        </StyledLottie>
        <StyledText message="first">헉!</StyledText>
        <StyledText message="second">페이지를 찾을 수 없어요.</StyledText>
        <StyledButtonWrapper>
          <Link href="/Main">
            <StyledButton>
              <button>메인으로 돌아가기</button>
            </StyledButton>
          </Link>
        </StyledButtonWrapper>
      </StyledItemWrapper>
    </StyledPadding>
  );
}

export default NotFound;

const StyledPadding = styled("div", {
  padding: "2rem 4rem",
});

const StyledItemWrapper = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "3rem",
});

const StyledLottie = styled("div", {
  width: "100%",
  height: "20rem",
});

const StyledButtonWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  marginBottom: "1rem",
});

const StyledButton = styled("a", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "27.2rem",
  borderRadius: "4px",
  height: "4rem",
  fontWeight: "$lg",
  backgroundColor: "$yellow",
  opacity: 0.8,
  marginBottom: "1rem",
  marginTop: "1.5rem",
});

const StyledText = styled("span", {
  fontWeight: "$lg",
  opacity: 0.86,
  marginBottom: "0.45rem",
  variants: {
    message: {
      first: {
        fontSize: "1.43rem",
        marginBottom: "0",
      },
      second: {
        fontSize: "1.15rem",
        fontWeight: "$xs",
      },
    },
  },
});
