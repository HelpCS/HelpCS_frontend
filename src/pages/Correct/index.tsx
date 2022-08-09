import { styled } from "../../../stitches.config";
import LottieWrapper from "../../components/Common/LottieWrapper";
import bgLottie from "../../assets/lottieJSON/correct.json";
import Link from "next/link";

function Correct() {
  return (
    <StyledCorrectWrapper>
      <StyledLottie>
        <LottieWrapper lottieData={bgLottie} />
      </StyledLottie>
      <StyledMessage message="first">우와!</StyledMessage>
      <StyledMessage message="second">정답입니다</StyledMessage>
      <StyledMessage message="third">
        내일의 문제도 기대되는데요 ?!
      </StyledMessage>
      {/* 문제 해설 링크로 이동합니다. */}
      <Link href="/">
        <a>
          <StyledButton>해설 보러가기</StyledButton>
        </a>
      </Link>
    </StyledCorrectWrapper>
  );
}

export default Correct;

const StyledCorrectWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const StyledLottie = styled("div", {
  width: "100%",
  height: "20rem",
});

const StyledMessage = styled("span", {
  fontWeight: "$lg",
  opacity: 0.86,
  marginBottom: "0.45rem",
  variants: {
    message: {
      first: {
        fontSize: "1.7rem",
        marginBottom: "0",
      },
      second: {
        fontSize: "1.43rem",
      },
      third: {
        fontSize: "1.15rem",
        fontWeight: "$xs",
      },
    },
  },
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
  marginTop: "1rem",
});
