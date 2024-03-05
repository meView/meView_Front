import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import NavigateBtn from "../../components/question/NavigateBtn";
import QuestionText from "../../components/question/QuestionText";
import { answerState } from "../../recoil/QuestionAtom";


const QuestionWrapper = styled.div`
  height: var(--vh);
  background-color: var(--Gray-15);
  position: relative;
`;
const Top = styled.div`
  width: 100%;
  max-width: 500px;
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
  }
  .count {
    position: absolute;
    bottom: 16px;
    left: 36px;
    color: #8B8B8B;
  }
  .warning {
    margin-top: 16px;
    margin-left: 20px;
  }
`;

const TextArea = styled.textarea`
  outline: none;
  border: none;
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

  ${({ $textState }) =>
    $textState === "error" &&
    `
    outline: 1px solid var(--Error);
  `}
  &:focus {
    ${({ $textState }) =>
    $textState === "writing" &&
    `
    outline: 1px solid var(--primary); // 글자 수가 1~19일 때
  `}
  }
`;

const TextLength = styled.span`
  color: ${({ $textState, $isFocused }) =>
    $textState === "error"
      ? "var(--Error)"
      : $textState === "writing" && $isFocused
      ? "var(--primary)"
      : "white"};
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
    answer1 === "TEAM"
      ? "어떤 프로젝트 리뷰를 듣고 싶나요?"
      : "무엇과 관련해서 피드백을 받고 싶으신가요?";
  const description =
    answer1 === "TEAM"
      ? "진행한 프로젝트 명을 써주세요!"
      : "리뷰 제목을 지어주세요!";

  const handleChange = (e) => {
    if (e.target.value.length <= 20) {
      setInputText(e.target.value);
      setAnswer({
        ...answer,
        answer2: e.target.value,
      });
    }
  };

  /* textarea focus 상태 아닐 경우 */
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  

  const getTextState = (length) => {
    if (length >= 20) return "error";
    if (length > 0 && length < 20) return "writing";
    return "default";
  };

  const textState = getTextState(inputText.length);

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
            $textState={textState}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div className="count">
            <TextLength $textState={textState} $isFocused={isFocused}>{inputText.length}/</TextLength>
            20자
          </div>
        </div>
        {
          textState === "error" 
          ? <div className="warning">
              <img alt="warning message" src="./image/warning-msg.svg"/>
            </div>
          : null
        }
      </Top>
      <Bottom>
        <NavigateBtn isNextDisabled={!inputText.trim()} />
      </Bottom>
    </QuestionWrapper>
  );
}

export default QuestionSecond;
