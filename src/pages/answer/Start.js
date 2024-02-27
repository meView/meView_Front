import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pageState } from "../../recoil/AnswerAtom";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background-image: url("./image/answer-background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: var(--Gray-15);
  font-weight: bold;
`;
const Top = styled.div`
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
  margin-left: 20px;
  margin-right: 20px;
  .button-img {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .button {
    width: 100%;
  }
`;

function Start() {
  const [page, setPage] = useRecoilState(pageState);
  return (
    <Container>
      <Top>
        <span className="highlight">닉네임누구님</span>
        <span className="text">
          이<br></br>
        </span>
        <span className="highlight">프로젝트어디</span>
        <span className="text">
          에서<br></br>
        </span>
        <span className="text2">
          본인의 강점, 약점 or 강점+약점에 대한 리뷰를 원해요
        </span>
        <span className="subtitle">모든 답변은 익명으로 전달돼요</span>
      </Top>

      <Bottom>
        <button
          className="button-img"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <img
            className="button"
            alt="review start button"
            src="./image/review-start-button.svg"
          />
        </button>
      </Bottom>
    </Container>
  );
}

export default Start;
