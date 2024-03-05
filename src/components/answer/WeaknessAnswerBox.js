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

function WeaknessAnswerBox(props) {
  /* 글자 수 세기 + 입력 값 저장 */
  const [answer, setAnswer] = useRecoilState(answerState);
  const [inputText, setInputText] = useState(
    answer.weaknessReview[props.chip] || ""
  );

  useEffect(() => {
    setInputText(answer.weaknessReview[props.chip]);
  }, [props.chip]);

  const handleChange = (e) => {
    if (e.target.value.length <= 500) {
      setInputText(e.target.value);
      setAnswer({
        ...answer,
        weaknessReview: {
          ...answer.weaknessReview,
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
    judgment: "판단력",
    execution: "실행력",
    friendliness: "친화력",
    listening: "경청능력",
    perseverance: "끈기력",
  };
  // 멘트 칩
  const chip_ment_dictionary = {
    communication:
      "ex) 말하려는 바가 명료하지 않아서 이해가 어려울 때가 있어요. 생각을 한번 정리한 후에 이야기해주면 좋겠어요.",
    observation:
      "ex) 큰 그림은 잘 그리지만 디테일을 놓칠 때가 있어요. 사소한 부분도 발견해 내는 관찰력을 기른다면 더 나은 인재로 성장할 거예요. ",
    judgment:
      "ex) 완벽을 추구하다 보니 중요한 순간에 결정을 못 할 때가 있어 아쉬웠어요. 신속하게 판단하는 능력을 기른다면 더 나은 인재로 성장할 거예요. ",
    execution:
      "ex) 실제로 행동하지 않아서 방치되는 아이디어가 많아 아쉬워요. 실행력을 기른다면 더 나은 인재로 성장할 거예요. ",
    friendliness:
      "ex) 문제가 발생해도 팀원에게 공유하지 않는 모습이 조금 아쉬웠어요. 협조적인 태도를 기른다면 팀원들과 시너지를 낼 수 있을 거예요.",
    listening:
      "ex) 주장이 뚜렷해서 가끔 다른 의견을 듣지 않을 때가 있어요. 상대방의 입장을 공감하는 자세로 경청해주면 좋겠어요.",
    perseverance:
      "ex) 실행력에 비해 뒷심은 조금 아쉬워요. 어려운 과제에 직면해도 끝까지 마무리하는 끈기력까지 갖춘다면 실행력과 함께 시너지를 낼 수 있을 거예요. ",
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

export default WeaknessAnswerBox;
