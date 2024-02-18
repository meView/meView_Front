import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import NavigateBtn from "../../components/question/NavigateBtn";
import QuestionText from "../../components/question/QuestionText";
import { answerState } from "../../recoil/QuestionAtom";

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
  .answer {
    width: 100%;
    height: 280px;
    position: relative;

    .count {
      position: absolute;
      color: white;
      bottom: 16px;
      left: 36px;
    }
  }
`;

const TextArea = styled.textarea.withConfig({
  //DOM prop 오류 해결
  shouldForwardProp: (prop) => !["isOverLimit"].includes(prop),
})`
  outline: none;
  height: 280px;
  box-sizing: border-box;
  position: absolute;
  left: 20px;
  right: 20px;
  background-color: var(--Gray-14);
  font-size: var(--subtitle-01);
  font-weight: bold;
  color: var(--Gray-02);
  padding: 16px;
  line-height: 28px;
  border-radius: 12px;
  resize: none;
  
  ${({ isoverlimit }) =>
    isoverlimit &&
    `
    outline: 1px solid var(--Error);
  `}
  
`;

const Bottom = styled.div`
  height: 88px;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 500px;
`;

function QuestionSecond(props) {
  /* 프로젝트 팀원 or 주변 지인 */
  const getAnswer = useRecoilValue(answerState);

  /* 글자 수 세기 + 입력 값 저장 */
  const [answer, setAnswer] = useRecoilState(answerState);
  const [inputText, setInputText] = useState(answer.answer2 || "");

  const answer1 = getAnswer.answer1;
   const text =
     answer1 === "project"
       ? "어떤 프로젝트 리뷰를 듣고 싶나요?"
       : "리뷰 제목을 지어주세요!";
   const description =
     answer1 === "project"
       ? "진행한 프로젝트 명을 써주세요!"
       : "무엇과 관련해서 피드백을 받고 싶으신가요?";

  

  const handleChange = (e) => {
    if (e.target.value.length <= 20) {
      setInputText(e.target.value);
      setAnswer({
        ...answer,
        answer2: e.target.value,
      });
    }
  };
  const isoverlimit = inputText.length >= 20;

  return (
    <QuestionWrapper>
      <Top>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${props.progress}%` }}
          ></div>
        </div>
        <QuestionText text={text} description={description} />
        <div className="answer">
          <TextArea
            maxLength="20"
            value={inputText}
            placeholder="스위프 프로젝트"
            onChange={handleChange}
            isoverlimit={isoverlimit ? 1 : 0}
          />
          <span className="count">{inputText.length}/20자</span>
        </div>
      </Top>
      <Bottom>
        <NavigateBtn isNextDisabled={!inputText.trim()} />
      </Bottom>
    </QuestionWrapper>
  );
}

export default QuestionSecond;
