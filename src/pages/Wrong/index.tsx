import bgLottie from "../../assets/lottieJSON/wrong.json";
import Result from "../../components/Result";

function Wrong() {
  return (
    <Result
      lottieJson={bgLottie}
      interjection="헉!"
      result="오답입니다"
      message="괜찮아요. 내일의 문제도 화이팅입니다 !"
    />
  );
}

export default Wrong;
