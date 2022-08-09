import Result from "../../components/Result";
import bgLottie from "../../assets/lottieJSON/correct.json";

function Correct() {
  return (
    <Result
      lottieJson={bgLottie}
      interjection="우와!"
      result="정답입니다"
      message="내일의 문제도 기대되는데요 ?!"
    />
  );
}

export default Correct;
