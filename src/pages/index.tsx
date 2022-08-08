import { styled } from "../../stitches.config";
import AnswerLink from "../components/Button/AnswerLink";
import QuestionCard from "../components/Card/QuestionCard";
import Nav from "../components/Common/Nav";
import Greetings from "../components/Text/Greetings";

function Home() {
  return (
    <StyledSize>
      <StyledBigBoxSize>
        <Nav />
        <StyledMainWrapper>
          <Greetings />
          <StyledItemWrapper>
            <QuestionCard />
            <AnswerLink />
          </StyledItemWrapper>
        </StyledMainWrapper>
      </StyledBigBoxSize>
    </StyledSize>
  );
}

export default Home;

const StyledSize = styled("section", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
});

const StyledBigBoxSize = styled("section", {
  position: "relative",
  width: "70%",
});

const StyledMainWrapper = styled("div", {
  width: "100%",
  height: "100%",
  backgroundColor: "$yellow100",
  padding: "2rem 4rem",
});

const StyledItemWrapper = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  marginTop: "3rem",
});
