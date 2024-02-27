import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";

import {
  strengthState,
  weaknessState,
  selectedChipInfoState,
} from "../../../recoil/StrengthAtom";

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
const BackgroundColors = {
  소통능력: "rgba(38, 32, 35, 0.85)",
  실행력: "rgba(35, 38, 32, 0.85)",
  친화력: "rgba(38, 33, 33, 0.85)",
  판단력: "rgba(36, 33, 39, 0.85)",
  경청능력: "rgba(32, 35, 38, 0.85)",
  관찰력: "rgba(40, 34, 32, 0.85)",
  끈기력: "rgba(38, 37, 32, 0.85)",
};

const ChipContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
  backdrop-filter: blur(5px);
  border-radius: 4px; // 둥근 모서리
  drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
  cursor: ${({ value }) => (value > 0 ? "pointer" : "default")};

  ${({ value, keyType }) =>
    value > 0
      ? `
        padding: 8px 14px;
        font-size: 18px;
        background-color: ${BackgroundColors[keyType]};
        border-right: 4px solid ${keyColors[keyType]};
      `
      : ""}

  .chipimg {
    padding-right: 4px;
  }
  
  .chipValue {
     display: flex; 
    align-items: center;
    justify-content: center;
    color: ${({ keyType }) => keyColors[keyType]};
    font-weight: bold;
  }

  .valueStyle {
    padding-left: 4px;
    font-size: 14px;
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
  const weakness = useRecoilValue(weaknessState);
  const location = useLocation();
  const navigate = useNavigate();

  // 칩 정보 전달을 위한 state
  const setChipInfo = useSetRecoilState(selectedChipInfoState);

  const isStrengthActive = location.pathname === "/meview/capability/strength";
  const isstrength = isStrengthActive ? strength : weakness;
  const character_strength = isStrengthActive
    ? "character_strength"
    : "character_weakness";

  const handleChipClick = (chipName) => {
    const ChipInfo = {
      name: chipName,
      strength: character_strength,
    };

    setChipInfo(ChipInfo);
    navigate("../chipreview");
  };

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
      unselected: "/image/judgement-unselected.svg",
      selected: "/image/judgement-selected.svg",
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
        src={`/image/${character_strength}.svg`}
        alt="character_strength"
      />
      <Chips>
        {Object.entries(isstrength).map(([key, value]) => (
          <ChipContainer
            key={key}
            className={key}
            keyType={key}
            value={value}
            onClick={() => value > 0 && handleChipClick(key)}
          >
            {value > 0 ? (
              <>
                <img className="chipimg" src={imagePaths[key].selected} alt={`${key} icon`} />
                <div className="chipValue">
                  {key} <span className="valueStyle">+{value}</span>
                </div>
              </>
            ) : (
              <img src={imagePaths[key].unselected} alt={`${key} icon`} />
            )}
          </ChipContainer>
        ))}
      </Chips>
    </Container>
  );
}

export default BodyCharacter;
