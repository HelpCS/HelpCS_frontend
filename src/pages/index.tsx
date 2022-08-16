import { keyframes } from "@stitches/react";
import { styled } from "../../stitches.config";
import SignInput from "../components/Input/SignInput";
import GoLink from "../components/Button/GoLink";
import { ACCESS_TOKEN } from "../constants/localStorage";
import { useState } from "react";
import { useRouter } from "next/router";
import { post } from "../libs/api/api";

function Signin() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  function onClickSignup() {
    router.push("/Signup");
  }

  async function onClickSignin() {
    try {
      const response = await post<Signin>("/auth/signin", {
        userId: id,
        password: password,
      });
      localStorage.setItem(ACCESS_TOKEN, response.token);
      router.push("/Main");
    } catch (error) {
      alert("로그인에 실패하였습니다.");
    }
  }

  return (
    <>
      <StyledLogoWrapper>
        <StyledLogoText>
          도와줘 개발! 도와줘 개발! 도와줘 개발! 도와줘 개발! 도와줘 개발!
          도와줘 개발! 도와줘 개발! 도와줘 개발! 도와줘 개발! 도와줘 개발!
          도와줘 개발! 도와줘 개발! 도와줘 개발! 도와줘 개발! 도와줘 개발!
          도와줘 개발! 도와줘 개발! 도와줘 개발!
        </StyledLogoText>
      </StyledLogoWrapper>
      <StyledSize>
        <SignInput
          idState={id}
          password={password}
          setIdState={setId}
          setPasswordState={setPassword}
        />
        <GoLink
          onClickFirst={onClickSignup}
          onClickTwo={onClickSignin}
          firstSummary="회원가입"
          secondSummary="로그인"
        />
      </StyledSize>
    </>
  );
}

export default Signin;

const StyledSize = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "0rem 9rem",
  paddingBottom: "2rem",
});

const logoMove = keyframes({
  "0%": {
    transform: "translateX(0)",
  },

  "25%": {
    transform: "translateX(-25%)",
  },

  "50%": {
    transform: "translateX(0)",
  },

  "75%": {
    transform: "translateX(-25%)",
  },

  "100%": {
    transform: "translateX(0)",
  },
});

const StyledLogoWrapper = styled("div", {
  position: "relative",
  width: "100%",
  overflowX: "hidden",
  display: "flex",
  flexDirection: "row",
  paddingBottom: "200px",
});

const StyledLogoText = styled("h1", {
  position: "absolute",
  top: 0,
  width: "300vw",
  height: "100%",

  whiteSpace: "nowrap",
  wordBreak: "break-all",
  fontWeight: "$lg",
  fontSize: "5rem",
  color: "$green",

  display: "flex",
  alignItems: "center",

  animation: `${logoMove} 150s linear infinite`,
});
