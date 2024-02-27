import { useRecoilValue } from "recoil";
import { pageState, questionState } from "../../recoil/AnswerAtom";
import { questionFormState } from "../../recoil/HomeAtom";
import AnswerFinish from "./AnswerFinish";
import AnswerName from "./AnswerName";
import AnswerStrength from "./AnswerStrength";
import AnswerStrength2 from "./AnswerStrength2";
import AnswerWeakness from "./AnswerWeakness";
import AnswerWeakness2 from "./AnswerWeakness2";
import Start from "./Start";

function Answer() {
  const id = 1; 
  const question = useRecoilValue(questionState);
  /* 
    질문지 id에 해당하는 질문지의 type 가져오기 - 질문지 불러오기 api 요청 -> 해당 내용 전역 상태 저장
    답변 모두 저장 후 -> 답변 작성 api 요청
  */
  const type = question.question_type === 'strength' ? 'strength' : question.question_type === 'weakness' ? 'weakness' : 'both';
  const page = useRecoilValue(pageState);

  return (
    <>
    {
      type === 'strength'
      ? page === 0
        ? <Start/>
        : page === 1
          ? <AnswerName progress="25"/>
          : page === 2
            ? <AnswerStrength progress="50"/>
            : page === 3
              ? <AnswerStrength2 progress="75"/>
              : <AnswerFinish progress="100"/>
      : null
    }
    {
      type === 'weakness'
      ? page === 0
      ? <Start/>
      : page === 1
        ? <AnswerName progress="25"/>
        : page === 2
          ? <AnswerWeakness progress="50"/>
          : page === 3
            ? <AnswerWeakness2 progress="75"/>
            : <AnswerFinish progress="100"/>
    : null
    }
    {
      type === 'both'
      ? page === 0
      ? <Start/>
      : page === 1
        ? <AnswerName progress="17"/>
        : page === 2
          ? <AnswerStrength progress="34"/>
          : page === 3
            ? <AnswerStrength2 progress="51"/>
            : page === 4
              ? <AnswerWeakness progress="67"/>
              : page === 5 
                ? <AnswerWeakness2 progress="84"/>
                : <AnswerFinish progress="100"/>
    : null
    }
    </>
  );
}

export default Answer;