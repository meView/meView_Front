import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  width: 180px;

  margin: 24px;
  padding: 4px;
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

  background-color: ${({ $isStrength }) =>
    $isStrength
      ? "var(--primary)"
      : "var(--Gray-14)"}; // 조건에 따라 배경색 변경

  color: ${({ $isStrength }) =>
    $isStrength
      ? "var(--Gray-15)"
      : "var(--Gray-10)"}; // 조건에 따라 글자색 변경
  border: none;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 200px;

  display: flex;
  align-items: center;

  .button-text {
    font-size: 16px;
    font-weight: bold;
  }
`;


function ProjectSelector() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isStrength, setIsStrength] = useState(true);

  const onClick = () => {
    setIsStrength(!isStrength);
  };

  return (
    <>
      <Container>
        <ButtonContainer>
          <StyledButton onClick={onClick} $isStrength={isStrength}>
            <span className="button-text">내 강점</span>
          </StyledButton>
          <StyledButton onClick={onClick} $isStrength={!isStrength}>
            <span className="button-text">내 약점</span>
          </StyledButton>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ProjectSelector;
