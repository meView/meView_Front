import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectedStrengthState } from "../../../recoil/ProjectListAtom";

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
    $isStrength ? "white" : "var(--Gray-14)"};
  color: ${({ $isStrength }) =>
    $isStrength ? "var(--Gray-15)" : "var(--Gray-10)"};
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

  &:hover {
    background-color: ${({ $isStrength }) =>
      $isStrength ? "white" : "rgba(256,256,256,0.04)"};
    transition: background-color 0.3s ease;
  }
`;

function ProjectSelector() {
  const [selectedStrength, setSelectedStrength] = useRecoilState(
    selectedStrengthState
  );

  const onClickStrength = () => {
    setSelectedStrength("Strength");
  };

  const onClickWeakness = () => {
    setSelectedStrength("Weakness");
  };


  console.log(selectedStrength);
  return (
    <>
      <Container>
        <ButtonContainer>
          <StyledButton
            onClick={onClickStrength}
            $isStrength={selectedStrength === "Strength"}
          >
            <span className="button-text">내 강점</span>
          </StyledButton>
          <StyledButton
            onClick={onClickWeakness}
            $isStrength={selectedStrength === "Weakness"}
          >
            <span className="button-text">내 약점</span>
          </StyledButton>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ProjectSelector;
