import { styled } from "../../../stitches.config";
import LottieWrapper from "../../components/Common/LottieWrapper";
import Link from "next/link";

import { motion, Variants } from "framer-motion";
import {
  defaultEasing,
  defaultFadeInUpVariants,
  staggerHalf,
} from "../../constants/motions";

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

      <StyledMotionTextWrapper
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <StyledMessage message="first" variants={textVariants}>
          {interjection}
        </StyledMessage>
        <StyledMessage message="second" variants={textVariants}>
          {result}
        </StyledMessage>
        <StyledMessage message="third">{message}</StyledMessage>
      </StyledMotionTextWrapper>

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

const StyledMotionTextWrapper = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const StyledButtonWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
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
  marginTop: "1rem",
});

const StyledMessage = styled(motion.span, {
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

const textVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.68,
    transition: { duration: 1.2, ease: defaultEasing },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: defaultEasing },
  },
  exit: {
    opacity: 0,
    scale: 0.7,
    transition: { duration: 1.2, ease: defaultEasing },
  },
};
