import { styled } from "../../../stitches.config";
import LottieWrapper from "../../components/Common/LottieWrapper";
import Link from "next/link";

interface Props {
  lottieJson: object;
  interjection: string;
  result: string;
  message: string;
}

function Result({ lottieJson, interjection, result, message }: Props) {
  return (
    <StyledCorrectWrapper>
      <StyledLottie>
        <LottieWrapper lottieData={lottieJson} />
      </StyledLottie>
      <StyledMessage message="first">{interjection}</StyledMessage>
      <StyledMessage message="second">{result}</StyledMessage>
      <StyledMessage message="third">{message}</StyledMessage>

      {/* 문제 해설 링크로 이동합니다. */}
      <StyledButtonWrapper>
        <Link href="/">
          <StyledButton>
            <button>해설 보러가기</button>
          </StyledButton>
        </Link>
      </StyledButtonWrapper>
    </StyledCorrectWrapper>
  );
}
export default Result;

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

const StyledButtonWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  marginBottom: "1rem"
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
  marginTop: "1rem",
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
