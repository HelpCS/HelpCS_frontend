import { styled } from "../../../stitches.config";
import GoLink from "../../components/Button/GoLink";
import QuestionCard from "../../components/Card/QuestionCard";
import Greetings from "../../components/Text/Greetings";

function Main() {
  return (
    <StyledPadding>
      <Greetings />
      <StyledItemWrapper>
        <QuestionCard />
        <GoLink
          firstUrl="/Wrong"
          twoUrl="/"
          firstSummary="잘 모르겠어요"
          twoSummary="다른 문제 풀고 싶어요"
        />
      </StyledItemWrapper>
    </StyledPadding>
  );
}

export default Main;

const StyledPadding = styled("div", {
  padding: "2rem 4rem",
})

const StyledItemWrapper = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  marginTop: "3rem",
});
