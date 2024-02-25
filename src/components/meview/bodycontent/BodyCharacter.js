import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { strengthState } from "../../../recoil/StrengthAtom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  position: relative;
  .maincharacter {
    margin: 0 auto;
  }
`;

const Chips = styled.div`
  position: absolute;
  width: 100%;
`;

const keyColors = {
  소통능력: "#F291C6", 
  실행력: "#85C940",
  친화력: "#F0485A",
  판단력: "#C190FF",
  경청능력: "#62A9F5",
  관찰력: "#FC6644",
  끈기력: "#F3D25D",
};

const ChipContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
   backdrop-filter: blur(4px);
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
  .chipValue {
    margin-left: -22px;
    color: ${({ keyType }) => keyColors[keyType]};
  }

  &.소통능력 {
    top: 236px;
    left: 13.6%;
  }
  &.실행력 {
    top: 228px;
    left: 56%;
  }
  &.친화력 {
    top: 296px;
    left: 20%;
  }
  &.판단력 {
    top: 60px;
    left: 48%;
  }
  &.경청능력 {
    top: 126px;
    left: 58%;
  }
  &.관찰력 {
    top: 108px;
    left: 12%;
  }
  &.끈기력 {
    top: 362px;
    left: 52%;
  }
`;
function BodyCharacter() {
  const strength = useRecoilValue(strengthState);
  const imagePaths = {
    소통능력: {
      unselected: "/image/communication-unselected.svg",
      selected: "/image/communication-selected.svg",
    },
    실행력: {
      unselected: "/image/execution-unselected.svg",
      selected: "/image/execution-selected.svg",
    },
    친화력: {
      unselected: "/image/friendliness-unselected.svg",
      selected: "/image/friendliness-selected.svg",
    },
    판단력: {
      unselected: "/image/judgment-unselected.svg",
      selected: "/image/judgment-selected.svg",
    },
    경청능력: {
      unselected: "/image/listening-unselected.svg",
      selected: "/image/listening-selected.svg",
    },
    관찰력: {
      unselected: "/image/observation-unselected.svg",
      selected: "/image/observation-selected.svg",
    },
    끈기력: {
      unselected: "/image/perseverance-unselected.svg",
      selected: "/image/perseverance-selected.svg",
    },
  };

  return (
    <Container>
      <img
        className="maincharacter"
        src="/image/character_strength.svg"
        alt="character_strength"
      />
      <Chips>
        {Object.entries(strength).map(([key, value]) => (
          <ChipContainer key={key} className={key} keyType={key}>
            <img
              src={
                value === 0
                  ? imagePaths[key].unselected
                  : imagePaths[key].selected
              }
              alt={key}
            />
            {value > 0 && <div className="chipValue">{value}</div>}
          </ChipContainer>
        ))}
      </Chips>
    </Container>
  );
}

export default BodyCharacter;

