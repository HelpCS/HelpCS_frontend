import { motion } from "framer-motion";
import { styled } from "../../../stitches.config";
import GoLink from "../../components/Button/GoLink";
import SignupInput from "../../components/Input/SignupInput";
import { defaultFadeInUpVariants, staggerHalf } from "../../constants/motions";

function Signup() {
  return (
    <StyledPadding>
      <motion.div
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <StyledLogoWrapper variants={defaultFadeInUpVariants}>
          정보 입력
        </StyledLogoWrapper>
      </motion.div>
      <StyledSize>
        <SignupInput />
        <GoLink
          firstUrl="/"
          twoUrl="/"
          firstSummary="이미 계정이 있어요"
          twoSummary="등록"
        />
      </StyledSize>
    </StyledPadding>
  );
}

export default Signup;

const StyledPadding = styled("div", {
  padding: "2rem 9rem",
});

const StyledSize = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

const StyledLogoWrapper = styled(motion.h5, {
  fontSize: "25px",
  fontWeight: "$lg",
});
