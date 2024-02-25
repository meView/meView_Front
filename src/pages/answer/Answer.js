import { useRecoilValue } from "recoil";
import { pageState } from "../../recoil/AnswerAtom";
import { questionFormState } from "../../recoil/HomeAtom";
import AnswerFinish from "./AnswerFinish";
import AnswerName from "./AnswerName";
import AnswerStrength from "./AnswerStrength";
import AnswerStrength2 from "./AnswerStrength2";
import AnswerWeakness from "./AnswerWeakness";
import AnswerWeakness2 from "./AnswerWeakness2";
import Start from "./Start";

function Answer() {
  const id = 1; /* 테스트용 더미 id, 질문지 id가 1인 것의 답변 폼 */
  const questions = useRecoilValue(questionFormState);
  /* 질문지 id에 해당하는 질문지의 type 가져오기 */
  const data = questions.find(question => question.question_id === id);
  const type = data.question_type === 'strength' ? 'strength' : data.question_type === 'weakness' ? 'weakness' : 'both';

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