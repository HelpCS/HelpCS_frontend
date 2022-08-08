import { styled } from "../../../stitches.config";

function Greetings() {
  return (
    <StyledSize>
      <StyledMessage>
        {/* user 명이 들어갑니다. */}
        반가워요 <StyledStrong>user</StyledStrong> 님!
      </StyledMessage>
    </StyledSize>
  );
}

export default Greetings;

const StyledSize = styled("div", {
  display: "flex",
});

const StyledMessage = styled("span", {
  fontWeight: "$xs",
  fontSize: "1.3rem",
});

const StyledStrong = styled("strong", {
  opacity: 0.92,
});
