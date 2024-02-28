import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import InformCardBottom from "../../../util/InformCardBottom";
import { useRecoilState } from "recoil";
import { imageLoadingState } from "recoil/ProjectListAtom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin: 0 auto;
  padding: 8px;
  border-radius: 200px;
  background-color: var(--Gray-14);
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 4px;
`;
const StyledButton = styled.button`
  flex: 1;
  justify-content: center;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--primary)" : "var(--Gray-14)"}; // 조건에 따라 배경색 변경
  color: ${({ $isActive }) =>
    $isActive ? "var(--Gray-15)" : "var(--Gray-10)"}; // 조건에 따라 글자색 변경
  border: none;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 200px;

  display: flex;
  align-items: center;

  margin: 0 4px;
  .button-text {
    font-size: 18px;
    font-weight: bold;
  }
  .button-text2 {
    font-size: 14px;
    font-weight: bold;
    margin-left: 4px;
  }
`;

function BodySelect({ totalStrength, totalWeakness }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [imagesLoaded] = useRecoilState(imageLoadingState);

  const handleNavigate = (path) => {
    if (imagesLoaded) {
      navigate(path);
    }
  };

  const isStrengthActive = location.pathname === "/meview/strength";
  const isWeaknessActive = location.pathname === "/meview/weakness";

  const noReviewMessage = "질문지를 생성하고 리뷰를 받아봐요 :)";
  const subReviewMessage = "질문지 결과에 따라서 강약점을 모아서 보여드려요";

  let mainMessage = "리뷰를 통해 나만의 유일무이한 강점을 발굴해보세요 ;)";
  let subMessage = "역량 칩을 누르면 역량별 리뷰를 모아볼 수 있어요";
  if (totalStrength === 0 && isStrengthActive) {
    mainMessage = noReviewMessage;
    subMessage = subReviewMessage;
  } else if (totalWeakness === 0 && isWeaknessActive) {
    mainMessage = noReviewMessage;
    subMessage = subReviewMessage;
  } else if (isWeaknessActive) {
    mainMessage = "약점은 극복하면 그만! 주먹 불끈쥐고 강점으로 만들어봐요";
  }

  return (
    <>
      <Container>
        <ButtonContainer>
          <StyledButton
            $isActive={isStrengthActive}
            onClick={() => handleNavigate("/meview/strength")}
          >
            <span className="button-text">내 강점</span>
            <span className="button-text2"> +{totalStrength}</span>
          </StyledButton>
          <StyledButton
            $isActive={isWeaknessActive}
            onClick={() => handleNavigate("/meview/weakness")}
          >
            <span className="button-text">내 약점</span>
            <span className="button-text2"> +{totalWeakness}</span>
          </StyledButton>
        </ButtonContainer>
      </Container>
      <InformCardBottom mainMessage={mainMessage} subMessage={subMessage} />
    </>
  );
}

export default BodySelect;
