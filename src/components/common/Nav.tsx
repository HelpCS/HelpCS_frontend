import Link from "next/link";
import { styled } from "../../../stitches.config";

function Nav() {
  return (
    <StyledNav>
      <Link href="/">
        <a>
          <StyledLogoName>도와줘개발</StyledLogoName>
        </a>
      </Link>
      <div>
        <StyledButton>로그아웃</StyledButton>
      </div>
    </StyledNav>
  );
}

export default Nav;

const StyledNav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "3rem 8rem",
});

const StyledLogoName = styled("h1", {
  color: "$yellow",
  fontWeight: "$lg",
  cursor: "pointer",
});

const StyledButton = styled("button", {
  backgroundColor: "$yellow",
  color: "$white",
  fontWeight: "$md",
  fontSize: "0.9rem",
  borderRadius: "0.6rem",
  padding: "0.43rem 0.63rem",
  "&:hover": {
    opacity: 0.89,
    transition: "all 0.3s",
  },
});
