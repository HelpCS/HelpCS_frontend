import { useRouter } from "next/router";
import { styled } from "../../../stitches.config";
import GoLink from "../../components/Button/GoLink";
import QuestionCard from "../../components/Card/QuestionCard";
import Greetings from "../../components/Text/Greetings";

function Main() {
  const router = useRouter();

  function onClickWrong() {
    router.push("/Wrong");
  }

  function onClickAnother() {
    alert(
      "'도와줘 개발' 서비스는 하루마다 한 문제가 제공됩니다. 내일 새로운 문제에 도전해보세요!"
    );
  }

  return (
    <StyledPadding>
      <Greetings />
      <StyledItemWrapper>
        <QuestionCard />
        <GoLink
          onClickFirst={onClickWrong}
          onClickTwo={onClickAnother}
          firstSummary="잘 모르겠어요"
          secondSummary="다른 문제 풀고 싶어요"
        />
      </StyledItemWrapper>
    </StyledPadding>
  );
}

export default Main;

const StyledPadding = styled("div", {
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
