import { styled } from "../../stitches.config";
import AnswerLink from "../components/Button/AnswerLink";
import QuestionCard from "../components/Card/QuestionCard";
import Greetings from "../components/Text/Greetings";

function Home() {
  return (
    <>
      <Greetings />
      <StyledItemWrapper>
        <QuestionCard />
        <AnswerLink />
      </StyledItemWrapper>
    </>
  );
}

export default Home;

const StyledItemWrapper = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  marginTop: "3rem",
});
