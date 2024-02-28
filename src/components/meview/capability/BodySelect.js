import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { totalStrengthSelector } from "../../../recoil/StrengthAtom";
import { totalWeaknessSelector } from "../../../recoil/StrengthAtom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin: 0 auto;
  padding: 8px;
  border-radius: 200px;
  background-color: var(--Gray-14);
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
  color: ${({ $isActive }) => $isActive ? "var(--Gray-15)" : "var(--Gray-10)"}; // 조건에 따라 글자색 변경
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

function BodySelect() {
  const navigate = useNavigate();
  const location = useLocation();
  const totalStrength = useRecoilValue(totalStrengthSelector);
  const totalWeakness = useRecoilValue(totalWeaknessSelector);

  const isStrengthActive = location.pathname === "/meview/strength";
  const isWeaknessActive = location.pathname === "/meview/weakness";

  return (
    <Container>
      <ButtonContainer>
        <StyledButton
          $isActive={isStrengthActive}
          onClick={() => navigate("/meview/strength")}
        >
          <span className="button-text">내 강점</span>
          <span className="button-text2"> +{totalStrength}</span>
        </StyledButton>
        <StyledButton
          $isActive={isWeaknessActive}
          onClick={() => navigate("/meview/weakness")}
        >
          <span className="button-text">내 약점</span>
          <span className="button-text2"> +{totalWeakness}</span>
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}

export default BodySelect;