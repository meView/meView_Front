import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import NavigateBtn from "../../components/question/NavigateBtn";
import QuestionText from "../../components/question/QuestionText";
import { answerState, pageState } from "../../recoil/QuestionAtom";

const QuestionWrapper = styled.div`
  height: 100vh;
  background-color: var(--Gray-15);
  position: relative;
`;
const Top = styled.div`
  .progress {
    height: 8px;
    background-color: var(--primary);
  }
  .progress-bar {
    width: 100%;
    background-color: var(--primary-800);
    margin-bottom: 48px;
  }
  .question-form {
    color: var(--Gray-02);
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
  }
  .question-mark {
    width: 36px;
    height: 36px;
    margin-bottom: 8px;
  }
  .question-text {
    font-size: var(--headline-06);
    line-height: 34px;
    font-weight: bold;
  }

  .answer-box1 {
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }
  .answer-box2 {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }
  .answer-text {
    margin-left: 3%;
  }
  .radio-button {
    position: absolute;
    right: 2%;
  }

  .checked {
    background-color: var(--primary);
    border-radius: 8px;
    height: 68px;
  }
  .unchecked {
    background-color: var(--Gray-14);
    border-radius: 8px;
    height: 68px;
  }
  .checked .answer-title {
    font-size: var(--subtitle-02);
    font-weight: bold;
    color: var(--Gray-15);
  }
  .unchecked .answer-title {
    font-size: var(--subtitle-02);
    font-weight: bold;
    color: var(--Gray-02);
  }
  .checked .answer-description {
    font-size: var(--button-03);
    font-weight: bold;
    color: rgba(23, 23, 23, 0.6);
  }
  .unchecked .answer-description {
    font-size: var(--button-03);
    font-weight: bold;
    color: rgba(255, 255, 255, 0.6);
  }
`;
const Bottom = styled.div`
  height: 88px;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 500px;
`;

function QuestionThird(props) {
  const choice = useRecoilValue(answerState);
  /* 답변 선택 */
  const [checkedStrength, setCheckedStrength] = useState(choice.answer3 === "strength" ? "checked" : "unchecked");
  const [checkedWeakness, setCheckedWeakness] = useState(choice.answer3 === "weakness" ? "checked" : "unchecked");
  const [checkedBoth, setCheckedBoth] = useState(choice.answer3 === "both" ? "checked" : "unchecked");
  const [answer, setAnswer] = useRecoilState(answerState);

  const handleAnswer = (number) => {
    if (number === 1) {
      setAnswer({
        ...answer,
        answer3: "strength",
      });
    } else if (number === 2) {
      setAnswer({
        ...answer,
        answer3: "weakness",
      });
    } else if (number === 3) {
      setAnswer({
        ...answer,
        answer3: "both",
      });
    }
  };

  /* 다른 페이지 이동 시에도 답변 그대로 유지 */
  useEffect(() => {
    if (choice.answer3 === "strength") {
      setCheckedStrength("checked");
      setCheckedWeakness("unchecked");
      setCheckedBoth("unchecked");
    } else if (choice.answer3 === "weakness") {
      setCheckedStrength("unchecked");
      setCheckedWeakness("checked");
      setCheckedBoth("unchecked");
    } else if (choice.answer3 === "both") {
      setCheckedStrength("unchecked");
      setCheckedWeakness("unchecked");
      setCheckedBoth("checked");
    }
  }, [answer]);

  return (
    <QuestionWrapper>
      <Top>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${props.progress}%` }}
          ></div>
        </div>
        <QuestionText
          text={"어떤 리뷰를 듣고 싶으신가요?"}
          text2={"원하는 리뷰항목을 선택해주세요!"}
        />
        <div className="answer">
          <div
            className={`${checkedStrength} answer-box1`}
            onClick={() => {
              handleAnswer(1);
            }}
          >
            <div className="answer-text">
              <p className="answer-title">내 강점이 궁금해요</p>
            </div>
            <img
              className="radio-button"
              alt="checked radio"
              src={`/image/${checkedStrength}-radio.svg`}
            />
          </div>
          <div
            className={`${checkedWeakness} answer-box2`}
            onClick={() => {
              handleAnswer(2);
            }}
          >
            <div className="answer-text">
              <p className="answer-title">내 약점이 궁금해요</p>
            </div>
            <img
              className="radio-button"
              alt="unchecked radio"
              src={`/image/${checkedWeakness}-radio.svg`}
            />
          </div>
          <div
            className={`${checkedBoth} answer-box2`}
            onClick={() => {
              handleAnswer(3);
            }}
          >
            <div className="answer-text">
              <p className="answer-title">둘 다 궁금해요</p>
            </div>
            <img
              className="radio-button"
              alt="unchecked radio"
              src={`/image/${checkedBoth}-radio.svg`}
            />
          </div>
        </div>
      </Top>
      <Bottom>
        <NavigateBtn />
      </Bottom>
    </QuestionWrapper>
  );
}

export default QuestionThird;
