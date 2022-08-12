import { styled } from "../../../stitches.config";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants, staggerHalf } from "../../constants/motions";

function Greetings() {
  return (
    <StyledSize
      variants={staggerHalf}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <StyledMessage variants={defaultFadeInUpVariants}>
        {/* user 명이 들어갑니다. */}
        반가워요 <StyledStrong>user</StyledStrong> 님!
      </StyledMessage>
    </StyledSize>
  );
}

export default Greetings;

const StyledSize = styled(motion.div, {
  display: "flex",
});

const StyledMessage = styled(motion.span, {
  fontWeight: "$xs",
  fontSize: "1.3rem",
});

const StyledStrong = styled("strong", {
  opacity: 0.92,
});
