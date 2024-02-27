import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import QuestionText from "../../components/question/QuestionText";
import { answerState, pageState } from "../../recoil/QuestionAtom";
import WideButton from "../../util/WideButton";

const QuestionWrapper = styled.div`
  height: 100vh;
  background-color: var(--Gray-15);
  position: relative;
  width: 100%;
  max-width: 500px;
  background-image: url("./image/question-background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
  .top-div {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    height: 56px;
  }
  .close-button {
    margin-top: -28px;
    position: absolute;
    right: 20px;
    margin-bottom: 8px;
    cursor: pointer;
  }
`;
const Bottom = styled.div`
  height: 88px;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  cursor: pointer;
`;

function QuestionFourth(props) {
  const navigate = useNavigate();
  const [answer, setAnswer] = useRecoilState(answerState);
  const [page, setPage] = useRecoilState(pageState);
  return (
    <QuestionWrapper>
      <Top>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${props.progress}%` }}
          ></div>
        </div>
        <div className="top-div">
          <img
            className="close-button"
            alt="close button"
            src="/image/close.svg"
            onClick={() => {
              /* 답변 데이터베이스 저장 */

              /* 질문지 생성 -> answer 상태 초기화 */
              setAnswer({
                answer1: "",
                answer2: "",
                answer3: "",
              });
              setPage(1);
              navigate("/home");
            }}
          />
        </div>
        <QuestionText
          text={"질문지가 생성됐어요!"}
          description={"링크를 복사해서 지인에게 리뷰를 요청해보세요!"}
        />
      </Top>
      <Bottom>
        <WideButton text={"질문지 공유하기"} />
      </Bottom>
    </QuestionWrapper>
  );
}

export default QuestionFourth;
