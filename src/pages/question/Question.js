import { useRecoilValue } from "recoil";
import QuestionFirst from "./QuestionFirst";
import QuestionSecond from "./QuestionSecond";
import QuestionThird from "./QuestionThird";
import QuestionFinish from "./QuestionFinish";
import { pageState } from "recoil/QuestionAtom";
import usePreventRefresh from "util/usePreventRefresh";

function Question() {
  const page = useRecoilValue(pageState);
  usePreventRefresh(page !== 4);

  return (
    <>
      {page === 1 ? (
        <QuestionFirst progress={25} />
      ) : page === 2 ? (
        <QuestionSecond progress={50} />
      ) : page === 3 ? (
        <QuestionThird progress={75} />
      ) : (
        <QuestionFinish progress={100} />
      )}
    </>
  );
}

export default Question;
