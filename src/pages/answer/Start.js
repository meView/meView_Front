import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import WideButton from "util/WideButton";
import { pageState, questionState } from "../../recoil/AnswerAtom";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  color: var(--Gray-15);
  font-weight: bold;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  max-width: 500px;
  height: var(--vh);
  position: relative;
  overflow: hidden;

  .background {
    position: absolute;
    min-width: 100%;
    min-height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
`;

const Top = styled.div`
  position: absolute;
  top: 0;
  padding: 56px 20px;
  .highlight {
    font-size: 36px;
    display: inline;
    box-shadow: inset 0 -20px 0 rgba(23, 23, 23, 0.16);
  }
  .text {
    font-size: 24px;
  }
  .text2 {
    font-size: 18px;
    margin-top: 4px;
  }
  .subtitle {
    display: flex;
    margin-top: 12px;
    color: rgba(23, 23, 23, 0.6);
  }
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 24px;
  width: 100%;
  max-width: 500px;
  .button {
    width: 100%;
  }
`;

function Start() {
  const question = useRecoilValue(questionState);
  const [page, setPage] = useRecoilState(pageState);
  const text2 =
    question.question_type === "strength"
      ? "본인의 강점에 대한 리뷰를 원해요"
      : question.question_type === "weakness"
      ? "본인의 약점에 대한 리뷰를 원해요"
      : "본인의 강점과 약점에 대한 리뷰를 원해요";

  return (
    <Container>
      <Background>
        <object
          className="background"
          data="./image/answer-background.svg"
          aria-label="background-imagf"
        />
      </Background>
      <Top>
        <span className="highlight">{question.user_id}님</span>
        <span className="text">
          이<br></br>
        </span>
        <span className="highlight">{question.question_title}</span>
        <span className="text">
          에서<br></br>
        </span>
        <span className="text2">{text2}</span>
        <span className="subtitle">모든 답변은 익명으로 전달돼요</span>
      </Top>
      <Bottom>
        <WideButton
          className="button"
          text="리뷰 시작하기"
          onClick={() => {
            setPage(page + 1);
          }}
        />
      </Bottom>
    </Container>
  );
}

export default Start;
