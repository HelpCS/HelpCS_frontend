import { styled } from "../../stitches.config";
import GoLink from "../components/Button/GoLink";
import QuestionCard from "../components/Card/QuestionCard";
import Greetings from "../components/Text/Greetings";

function Home() {
  return (
    <StyledPadding>
      <Greetings />
      <StyledItemWrapper>
        <QuestionCard />
        <GoLink
          firstUrl="/"
          twoUrl="/"
          firstSummary="잘모르겠어요"
          twoSummary="다른 문제 풀고 싶어요"
        />
      </StyledItemWrapper>
    </StyledPadding>
  );
}

export default Home;

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
