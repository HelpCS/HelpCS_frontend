import { styled } from "../../../stitches.config";

function SignupInput() {
  return (
    <StyledSize>
      <StyledInput placeholder="이름" type="text"></StyledInput>
      <StyledInput placeholder="아이디" type="text"></StyledInput>
      <StyledInput placeholder="비밀번호" type="password"></StyledInput>
      <StyledInput placeholder="비밀번호 확인" type="password"></StyledInput>
    </StyledSize>
  );
}

export default SignupInput;

const StyledSize = styled("form", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const StyledInput = styled("input", {
  position: "relative",
  marginTop: "1.5rem",
  backgroundColor: "$white",
  border: "1px solid #FCFCFC",
  width: "100%",
  height: "3.1rem",
  borderRadius: "4px",
  fontWeight: "$sm",
  "&:valid": {
    paddingLeft: "1.2rem",
  },
  "&:focus": {
    outline: "none",
    color: "$black100",
  },
});
