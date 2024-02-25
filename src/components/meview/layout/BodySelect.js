import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 254px;
  margin: 0 auto;
  padding: 8px;
  border-radius: 200px;
  background-color: var(--Gray-14);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 4px; // Container 양쪽 끝에도 동일한 간격을 추가
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

  margin: 0 4px;
  .button-text {
    font-size: 18px;
    font-weight: bold;
  }
  .button-text2 {
    font-size: 14px;
    font-weight: bold;
  }
`;

function BodySelect() {
  const navigate = useNavigate();
  const location = useLocation();

  const isStrengthActive = location.pathname === "/meview/capability/strength";
  const isWeaknessActive = location.pathname === "/meview/capability/weakness";

  return (
    <Container>
      <ButtonContainer>
        <StyledButton
          $isActive={isStrengthActive}
          onClick={() => navigate("/meview/capability/strength")}
        >
          <span className="button-text">내 강점</span>
          <span className="button-text2"> +1</span>
        </StyledButton>
        <StyledButton
          $isActive={isWeaknessActive}
          onClick={() => navigate("/meview/capability/weakness")}
        >
          <span className="button-text">내 약점</span>
          <span className="button-text2"> +1</span>
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}

export default BodySelect;
