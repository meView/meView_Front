import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import NavigateBtn from "../../components/question/NavigateBtn";
import QuestionText from "../../components/question/QuestionText";
import { modalState, answerState } from "../../recoil/QuestionAtom";
import WarningModal from "../../util/WarningModal";

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

  .answer-box1 {
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin-bottom: 12px;
  }
  .answer-box2 {
    margin-left: 20px;
    margin-right: 20px;
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

function QuestionFirst(props) {
  /* 답변 선택 */
  const [checkedProject, setCheckedProject] = useState("checked");
  const [checkedFriend, setCheckedFriend] = useState("unchecked");

  const handleAnswer = (number) => {
    if (number === 1) {
      // 프로젝트 팀원에게 리뷰 요청
      setAnswer({
        ...answer,
        answer1: "project",
      });
    } else if (number === 2) {
      // 주변 지인에게 리뷰 요청
      setAnswer({
        ...answer,
        answer1: "friend",
      });
    }
  };

  /* 답변 저장 */
  const [answer, setAnswer] = useRecoilState(answerState);

  /* 다른 페이지 이동 시에도 답변 그대로 유지 */
  const choice = useRecoilValue(answerState);
  useEffect(() => {
    if (choice.answer1 === "project") {
      setCheckedProject("checked");
      setCheckedFriend("unchecked");
    } else if (choice.answer1 === "friend") {
      setCheckedProject("unchecked");
      setCheckedFriend("checked");
    }
  }, [answer]);

  /* 뒤로가기 버튼 - 모달 */
  const [modal, setModal] = useRecoilState(modalState);

  return (
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
            className={`${checkedProject} answer-box1`}
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
              src={`/image/${checkedProject}-radio.svg`}
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
        <NavigateBtn />
      </Bottom>
      {modal && (
        <WarningModal
          title="정말로 나가시겠어요?"
          description="질문지 작성 중간에 나가시면 작성한 내용은 사라져요"
          no="계속 할게요"
          yes="네"
        />
      )}
    </QuestionWrapper>
  );
}

export default QuestionFirst;
