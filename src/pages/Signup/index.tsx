import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { styled } from "../../../stitches.config";
import GoLink from "../../components/Button/GoLink";
import SignupInput from "../../components/Input/SignupInput";
import { ACCESS_TOKEN } from "../../constants/localStorage";
import { defaultFadeInUpVariants, staggerHalf } from "../../constants/motions";
import { post } from "../../libs/api/api";

function Signup() {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  function onClickSignin() {
    router.push("/");
  }

  async function onClickSignup() {
    try {
      const response = await post<Signup>("/auth/signup", {
        username: name,
        userId: id,
        password: password,
      });
      localStorage.setItem(ACCESS_TOKEN, response.token);
      router.push("/");
    } catch (error) {
      alert("회원가입에 실패하였습니다.");
    }
  }
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
        <SignupInput
          nameState={name}
          idState={id}
          password={password}
          setNameState={setName}
          setIdState={setId}
          setPasswordState={setPassword}
        />
        <GoLink
          onClickFirst={onClickSignin}
          onClickTwo={onClickSignup}
          firstSummary="이미 계정이 있어요"
          secondSummary="등록"
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
