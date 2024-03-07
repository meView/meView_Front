import { useRecoilState } from "recoil";
import styled from "styled-components";
import NavigateBtn from "../../components/answer/navigateBtn";
import { answerState, modalState } from "../../recoil/AnswerAtom";
import WarningModal from "../../components/answer/WarningModal";
import { useState } from "react";

const Container = styled.div`
  background-color: var(--Gray-15);
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
  .title {
    margin: 48px 20px 56px 20px;
    color: var(--Gray-02);
    font-size: var(--headline-06);
    font-weight: var(--font-weight-bold);
  }
  .title-text {
    line-height: 34px;
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
    color: #8b8b8b;
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

/* 배경 블러 처리 */
const BlurContainer = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: 500px;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.48);
  display: ${({ $show }) => ($show === "true" ? "block" : "none")};
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 500px;
`;

function AnswerName(props) {
  const [answer, setAnswer] = useRecoilState(answerState);
  const [inputText, setInputText] = useState(answer.name || "");

  const handleChange = (e) => {
    if (e.target.value.length <= 10) {
      setInputText(e.target.value);
      setAnswer({
        ...answer,
        name: e.target.value,
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
    if (length >= 10) return "error";
    if (length > 0 && length < 10) return "writing";
    return "default";
  };

  const textState = getTextState(inputText.length);
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <>
      <Container>
        <Top>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${props.progress}%` }}
            ></div>
          </div>
          <div className="title">
            <p className="title-text">간단한 자기소개 부탁해요!</p>
            <p className="title-text">본인을 나타낼 닉네임을 적어주세요</p>
          </div>
          <div className="answer">
            <TextArea
              name="nickname"
              maxLength="10"
              value={inputText}
              placeholder="김땡땡"
              onChange={handleChange}
              $textState={textState}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <div className="count">
              <TextLength $textState={textState} $isFocused={isFocused}>
                {inputText.length}/
              </TextLength>
              10자
            </div>
          </div>
          {textState === "error" ? (
            <div className="warning">
              <img alt="warning message" src="./image/warning-10msg.svg" />
            </div>
          ) : null}
        </Top>
        <Bottom>
          <NavigateBtn isNextDisabled={!inputText.trim()} />
        </Bottom>
      </Container>
      <BlurContainer $show={modal.toString()} />
      {modal && (
        <Modal>
          <WarningModal
            title="정말로 나가시겠어요?"
            description="질문지 작성 중간에 나가시면 작성한 내용은 사라져요"
            no="계속 할게요"
            yes="네"
            onClose={() => setModal(false)}
            modalstate={modalState}
          />
        </Modal>
      )}
    </>
  );
}

export default AnswerName;
