import { useRecoilValue } from "recoil";
import { pageState } from "../../recoil/AnswerAtom";
import AnswerFifth from "./AnswerFifth";
import AnswerFinish from "./AnswerFinish";
import AnswerFirst from "./AnswerFirst";
import AnswerFourth from "./AnswerFourth";
import AnswerSecond from "./AnswerSecond";
import AnswerThird from "./AnswerThird";
import Start from "./Start";

function Answer() {
  const page = useRecoilValue(pageState);

  return (
    <>
      {
        page === 0
        ? <Start/>
        : page === 1
          ? <AnswerFirst progress="20"/>
          : page === 2
            ? <AnswerSecond progress="40"/>
            : page === 3
              ? <AnswerThird progress="60"/>
              : page === 4
                ? <AnswerFourth progress="80"/>
                : page === 5
                  ? <AnswerFifth progress="100"/>
                  : <AnswerFinish progress="100"/>
      }
    </>
  );
}

export default Answer;