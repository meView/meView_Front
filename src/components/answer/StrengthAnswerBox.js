import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { answerState } from "../../recoil/AnswerAtom";

const Container = styled.div`
  width: 100%;
  margin-bottom: 48px;
  background-color: var(--Gray-15);

  .warning {
    margin-top: 20px;
    margin-left: 20px;
    height: 52px;
  }
  .answer {
    position: relative;
    width: 100%;
    height: 296px;
  }
  .count {
    position: absolute;
    bottom: 16px;
    right: 36px;
    font-size: var(--button-03);
    font-weight: var(--font-weight-bold);
    color: #6f6f6f;
  }
  .title-box {
    margin: 0 20px 16px 20px;
  }
  .title {
    font-weight: var(--font-weight-bold);
    color: var(--Gray-02);
    font-size: var(--subtitle-02);
    line-height: 24px;
  }
  .desc {
    font-size: var(--body-02);
    color: var(--Gray-09);
    line-height: 26px;
  }
`;
const TextArea = styled.textarea`
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--Gray-12);
    border-radius: 7px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--Gray-11);
  }

  outline: none;
  border: none;
  height: 296px;
  box-sizing: border-box;
  position: absolute;
  left: 20px;
  right: 20px;
  background-color: var(--Gray-14);
  font-size: var(--body-02);
  font-weight: var(--font-weight-regular);
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
    outline: 1px solid var(--primary);
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

function StrengthAnswerBox(props) {
  /* 글자 수 세기 + 입력 값 저장 */
  const [answer, setAnswer] = useRecoilState(answerState);
  const [inputText, setInputText] = useState(
    answer.strengthReview[props.chip] || ""
  );

  useEffect(() => {
    setInputText(answer.strengthReview[props.chip]);
  }, [props.chip]);

  const handleChange = (e) => {
    if (e.target.value.length <= 500) {
      setInputText(e.target.value);
      setAnswer({
        ...answer,
        strengthReview: {
          ...answer.strengthReview,
          [props.chip]: e.target.value,
        },
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
    if (length >= 500) return "error";
    if (length > 0 && length < 500) return "writing";
    return "default";
  };

  const textState = getTextState(inputText?.length || 0);

  /* 선택 칩 */
  const chip_dictionary = {
    communication: "소통능력",
    observation: "관찰력",
    judgement: "판단력",
    execution: "실행력",
    friendliness: "친화력",
    listening: "경청능력",
    perseverance: "끈기력",
  };
  /* 멘트 칩 */
  const chip_ment_dictionary = {
    communication:
      "ex) 상대방이 이해하기 쉽게 의견을 전달하는 능력 덕분에 갈등 없이 프로젝트를 원활하게 진행할 있었어요.",
    observation:
      "ex) 다른 팀원들이 놓치고 있던 중요한 오류를 발견해 준 덕분에 큰 문제 없이 프로젝트를 마칠 수 있었어요.",
    judgement:
      "ex) 어려운 과제에 직면했을 때 신속하고 합리적인 결정을 내려준 덕분에 프로젝트를 무사히 마칠 수 있었어요.",
    execution:
      "ex) 생각에 그치지 않고 실제로 행동하고 구현해 내는 능력 덕분에 프로젝트를 성공적으로 마칠 수 있었어요.",
    friendliness:
      "ex) 밝고 긍정적인 모습으로 분위기 메이커 역할을 해줘서 함께 일하면 힘이 났어요. ",
    listening:
      "ex) 매 회의마다 팀원들의 이야기를 귀담아들어준 덕분에 편안한 분위기 속에서 의견을 자유롭게 낼 수 있었어요.",
    perseverance:
      "ex) 한번 시작한 일은 끝까지 해내는 모습 덕분에 동기부여가 되어 의욕을 잃지 않고 프로젝트를 무사히 마칠 수 있었어요.",
  };

  return (
    <Container>
      <div className="title-box">
        <p className="title">
          {chip_dictionary[props.chip]}을 고른 이유가 궁금해요
        </p>
        <p className="desc">구체적인 사례를 적어주시면 더 좋아요</p>
      </div>
      <div className="answer">
        <TextArea
          name="review"
          maxLength="500"
          value={inputText}
          placeholder={chip_ment_dictionary[props.chip]}
          onChange={handleChange}
          $textState={textState}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="count">
          <TextLength $textState={textState} $isFocused={isFocused}>
            {inputText?.length || 0}/
          </TextLength>
          500자
        </div>
      </div>
      {textState === "error" ? (
        <div className="warning">
          <img alt="warning message" src="./image/warning-500msg.svg" />
        </div>
      ) : null}
    </Container>
  );
}

export default StrengthAnswerBox;
