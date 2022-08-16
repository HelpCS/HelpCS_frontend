import { SetStateAction, Dispatch, ChangeEvent } from "react";
import { styled } from "../../../stitches.config";

interface Props {
  nameState: string;
  setNameState: Dispatch<SetStateAction<string>>;
  idState: string;
  setIdState: Dispatch<SetStateAction<string>>;
  password: string;
  setPasswordState: Dispatch<SetStateAction<string>>;
}

function SignupInput({
  nameState,
  setNameState,
  idState,
  setIdState,
  password,
  setPasswordState,
}: Props) {
  function onChangeName(e: ChangeEvent<HTMLInputElement>) {
    setNameState(e.target.value);
  }

  function onChangeId(e: ChangeEvent<HTMLInputElement>) {
    setIdState(e.target.value);
  }

  function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPasswordState(e.target.value);
  }

  return (
    <StyledSize>
      <StyledInput
        placeholder="이름"
        value={nameState}
        onChange={onChangeName}
      />
      <StyledInput placeholder="아이디" value={idState} onChange={onChangeId} />
      <StyledInput
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
    </StyledSize>
  );
}

export default SignupInput;

const StyledSize = styled("div", {
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
