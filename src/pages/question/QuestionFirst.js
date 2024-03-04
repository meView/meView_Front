import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import styled, { createGlobalStyle } from "styled-components";
import NavigateBtn from "../../components/question/NavigateBtn";
import QuestionText from "../../components/question/QuestionText";
import { modalState, answerState } from "../../recoil/QuestionAtom";
import WarningModal from "../../components/question/WarningModal";

const GlobalStyle = createGlobalStyle`
  body.modal-active {
    overflow: hidden;
  }
  .blur {
    filter: blur(2px);
  }
`;

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

  .answer-box1,
  .answer-box2 {
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .answer-box1 {
    margin-bottom: 12px;
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
    &:hover {
      background-color: var(--Hover-02);
    }
  }
  .unchecked {
    background-color: var(--Gray-14);
    border-radius: 8px;
    height: 68px;
    &:hover {
      background-color: var(--Hover);
    }
  }
  .checked .answer-title {
    font-size: var(--subtitle-02);
    font-weight: bold;
    color: var(--Gray-15);
    line-height: 26px;
  }
  .unchecked .answer-title {
    font-size: var(--subtitle-02);
    font-weight: bold;
    color: var(--Gray-02);
    line-height: 26px;
  }
  .checked .answer-description {
    font-size: var(--button-03);
    font-weight: bold;
    color: rgba(23, 23, 23, 0.6);
    line-height: 18px;
  }
  .unchecked .answer-description {
    font-size: var(--button-03);
    font-weight: bold;
    color: var(--Medium-Emphasis);
    line-height: 18px;
  }
`;
const Bottom = styled.div`
  height: 88px;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 500px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 500px;
  pointer-events: auto;
  z-index: 2;
`;

function QuestionFirst(props) {
  /* 답변 저장 */
  const [answer, setAnswer] = useRecoilState(answerState);
  /* 다른 페이지 이동 시에도 답변 그대로 유지 */
  const choice = useRecoilValue(answerState);
  /* 답변 선택 */
  const [checkedTeam, setCheckedTeam] = useState(
    choice.answer1 === "team" ? "checked" : "unchecked"
  );
  const [checkedFriend, setCheckedFriend] = useState(
    choice.answer1 === "friend" ? "checked" : "unchecked"
  );
  /* 뒤로가기 버튼 - 모달 */
  const [modal, setModal] = useRecoilState(modalState);

  /* 답변 선택하지 않았을 때 버튼 disabled */
  const [disabled, setDisabled] = useState(
    choice.answer1 === "" ? true : false
  );

  const handleAnswer = (number) => {
    setDisabled(false);
    if (number === 1) {
      // 프로젝트 팀원에게 리뷰 요청
      setAnswer({
        ...answer,
        answer1: "team",
      });
    } else if (number === 2) {
      // 주변 지인에게 리뷰 요청
      setAnswer({
        ...answer,
        answer1: "friend",
      });
    }
  };

 


  useEffect(() => {
    setCheckedTeam(choice.answer1 === "team" ? "checked" : "unchecked");
    setCheckedFriend(choice.answer1 === "friend" ? "checked" : "unchecked");

    // blur 처리
    const toggleBlur = (isActive) => {
      const body = document.body;
      const blurElements = document.querySelectorAll(".blur-target");

      body.classList.toggle("modal-active", isActive);
      blurElements.forEach((el) => el.classList.toggle("blur", isActive));
    };
    toggleBlur(modal);

    // 클릭 이벤트 처리
    const handleClickOutside = (event) => {
      if (modal && !event.target.closest(".modal-content")) {
        event.stopPropagation();
        event.preventDefault();
      }
    };

    // 클릭 이벤트 리셋
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [choice, modal]);

  return (
    <>
      <GlobalStyle />
      <div className="blur-target">
        <QuestionWrapper>
          <Top>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${props.progress}%` }}
              ></div>
            </div>
            <QuestionText text={"누구에게 리뷰를 받고 싶나요?"} />
            {/* 답변 목록 */}
            <div className="answer">
              <div
                className={`${checkedTeam} answer-box1`}
                onClick={() => {
                  handleAnswer(1);
                }}
              >
                <div className="answer-text">
                  <p className="answer-title">프로젝트 팀원</p>
                  <p className="answer-description">일할 때 내 강약점 리뷰</p>
                </div>
                <img
                  className="radio-button"
                  alt="checked radio"
                  src={`/image/${checkedTeam}-radio.svg`}
                />
              </div>
              <div
                className={`${checkedFriend} answer-box2`}
                onClick={() => {
                  handleAnswer(2);
                }}
              >
                <div className="answer-text">
                  <p className="answer-title">주변 지인</p>
                  <p className="answer-description">일상 속 내 강약점 리뷰</p>
                </div>
                <img
                  className="radio-button"
                  alt="unchecked radio"
                  src={`/image/${checkedFriend}-radio.svg`}
                />
              </div>
            </div>
          </Top>
          <Bottom>
            <NavigateBtn isNextDisabled={disabled} />
          </Bottom>
        </QuestionWrapper>
      </div>
      {modal && (
        <ModalOverlay onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <WarningModal
              title="정말로 나가시겠어요?"
              description="질문지 작성 중간에 나가시면 작성한 내용은 사라져요"
              no="계속 할게요"
              yes="네"
              onClose={() => setModal(false)}
              modalstate={modalState}
              navigate="/home"
            />
          </div>
        </ModalOverlay>
      )}
    </>
  );
}

export default QuestionFirst;
