import Link from "next/link";
import { styled } from "../../../stitches.config";
import logo from "../../../public/favicon/bgLogo.png";
import Image from "next/image";

function Nav() {
  return (
    <StyledNav>
      <StyledLogoWrapper>
        <StyledImgWrapper>
          <StyledImg src={logo} alt="logoImg" />
        </StyledImgWrapper>
        <Link href="/">
          <a>
            <StyledLogoName>오늘의 문제</StyledLogoName>
          </a>
        </Link>
      </StyledLogoWrapper>
      <div>
        <StyledButton>로그아웃</StyledButton>
      </div>
    </StyledNav>
  );
}

export default Nav;

const StyledNav = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "fit-content",
  padding: "0.6rem 3rem",
  backgroundColor: "$pastelGreen",
});


const StyledLogoWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
})

const StyledLogoName = styled("h1", {
  fontWeight: "$lg",
  cursor: "pointer",
  fontSize: "1.2rem",
  marginLeft: "1rem"
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

const StyledImgWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "3rem",
});

const StyledImg = styled(Image, {
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "3rem",
});
