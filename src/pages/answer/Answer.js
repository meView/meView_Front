import { useRecoilState, useRecoilValue } from "recoil";
import { pageState, questionState } from "../../recoil/AnswerAtom";
import AnswerFinish from "./AnswerFinish";
import AnswerName from "./AnswerName";
import AnswerStrength from "./AnswerStrength";
import AnswerStrength2 from "./AnswerStrength2";
import AnswerWeakness from "./AnswerWeakness";
import AnswerWeakness2 from "./AnswerWeakness2";
import Start from "./Start";
import usePreventRefresh from "util/usePreventRefresh";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getAnswerForm } from "api/Answer_API";
import { useEffect } from "react";

function Answer() {
  const [searchParams, ] = useSearchParams();
  const id = searchParams.get('question_id');
  const [question, setQuestion] = useRecoilState(questionState);

  const {
    data: questionForm,
    isLoading: isLoadingQuestionForm,
    isError: isErrorQuestionForm,
  } = useQuery(
    ["questionForm"],
    () => getAnswerForm(id),
  );

  useEffect(() => {
    if (questionForm !== undefined) {
      setQuestion({
        user_id: questionForm.user_id,
        user_name: questionForm.user.user_nickname,
        question_target: questionForm.question_target,
        question_type: questionForm.question_type,
        question_title: questionForm.question_title
      })
    }
  }, [questionForm])

  const type =
    question.question_type === "STRENGTH"
      ? "STRENGTH"
      : question.question_type === "WEAKNESS"
      ? "WEAKNESS"
      : "BOTH";
      
  const page = useRecoilValue(pageState);
  const lastPage = type === "STRENGTH" ? 4 : type === "WEAKNESS" ? 4 : 6;
  usePreventRefresh(page !== lastPage);

  if (isLoadingQuestionForm) return <div></div>;
  if (isErrorQuestionForm) return <div>Error occurred</div>;

  return (
    <>
      {type === "STRENGTH" ? (
        page === 0 ? (
          <Start />
        ) : page === 1 ? (
          <AnswerName progress="25" />
        ) : page === 2 ? (
          <AnswerStrength progress="50" />
        ) : page === 3 ? (
          <AnswerStrength2 progress="75" />
        ) : (
          <AnswerFinish progress="100" />
        )
      ) : null}
      {type === "WEAKNESS" ? (
        page === 0 ? (
          <Start />
        ) : page === 1 ? (
          <AnswerName progress="25" />
        ) : page === 2 ? (
          <AnswerWeakness progress="50" />
        ) : page === 3 ? (
          <AnswerWeakness2 progress="75" />
        ) : (
          <AnswerFinish progress="100" />
        )
      ) : null}
      {type === "BOTH" ? (
        page === 0 ? (
          <Start />
        ) : page === 1 ? (
          <AnswerName progress="17" />
        ) : page === 2 ? (
          <AnswerStrength progress="34" />
        ) : page === 3 ? (
          <AnswerStrength2 progress="51" />
        ) : page === 4 ? (
          <AnswerWeakness progress="67" />
        ) : page === 5 ? (
          <AnswerWeakness2 progress="84" />
        ) : (
          <AnswerFinish progress="100" />
        )
      ) : null}
    </>
  );
}

export default Answer;
