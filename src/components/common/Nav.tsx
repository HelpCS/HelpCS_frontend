import Link from "next/link";
import { styled } from "../../../stitches.config";

function Nav() {
  return (
    <StyledNav>
      <Link href="/">
        <a>
          <StyledLogoName>오늘의 문제</StyledLogoName>
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
  padding: "1.3rem 4rem",
  backgroundColor: "$pastelGreen",
});

const StyledLogoName = styled("h1", {
  fontWeight: "$lg",
  cursor: "pointer",
  fontSize: "1.2rem",
});

const StyledButton = styled("button", {
  color: "$white",
  fontWeight: "$md",
  fontSize: "0.85rem",
  "&:hover": {
    opacity: 0.89,
    transition: "all 0.3s",
  },
});
