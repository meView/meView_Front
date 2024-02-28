import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getStrength, getWeakness } from "../../../api/Meview_API";

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
  COMMUNICATION: "#F291C6",
  EXECUTION: "#85C940",
  FRIENDLINESS: "#F0485A",
  JUDGMENT: "#C190FF",
  LISTENING: "#62A9F5",
  OBSERVATION: "#FC6644",
  PERSEVERANCE: "#F3D25D",
};

const BackgroundColors = {
  COMMUNICATION: "rgba(38, 32, 35, 0.85)",
  EXECUTION: "rgba(35, 38, 32, 0.85)",
  FRIENDLINESS: "rgba(38, 33, 33, 0.85)",
  JUDGMENT: "rgba(36, 33, 39, 0.85)",
  LISTENING: "rgba(32, 35, 38, 0.85)",
  OBSERVATION: "rgba(40, 34, 32, 0.85)",
  PERSEVERANCE: "rgba(38, 37, 32, 0.85)",
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


  &.COMMUNICATION {
  top: 236px;
  left: 13.6%;
  }
  &.EXECUTION {
    top: 228px;
    left: 56%;
  }
  &.FRIENDLINESS {
    top: 296px;
    left: 20%;
  }
  &.JUDGMENT {
    top: 60px;
    left: 48%;
  }
  &.LISTENING {
    top: 126px;
    left: 58%;
  }
  &.OBSERVATION {
    top: 108px;
    left: 12%;
  }
  &.PERSEVERANCE {
    top: 362px;
    left: 52%;
  }
`;
function BodyCharacter() {
  // const strength = useRecoilValue(strengthState);
  // const weakness = useRecoilValue(weaknessState);
  // 칩 정보 전달을 위한 state
  const setChipInfo = useSetRecoilState(selectedChipInfoState);
  const location = useLocation();
  const navigate = useNavigate();

  // api 연동
  const { data: strength, isLoading: isLoadingStrength } = useQuery(
    "strength",
    getStrength
  );
  const { data: weakness, isLoading: isLoadingWeakness } = useQuery(
    "weakness",
    getWeakness
  );

  if (isLoadingStrength || isLoadingWeakness) {
    return <div>Loading...</div>;
  }

  // `strength`와 `weakness`
  console.log(strength, weakness);

  const isStrengthActive = location.pathname === "/meview/strength";
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
    COMMUNICATION: {
      unselected: "/image/communication-unselected.svg",
      selected: "/image/communication-selected.svg",
    },
    EXECUTION: {
      unselected: "/image/execution-unselected.svg",
      selected: "/image/execution-selected.svg",
    },
    FRIENDLINESS: {
      unselected: "/image/friendliness-unselected.svg",
      selected: "/image/friendliness-selected.svg",
    },
    JUDGMENT: {
      unselected: "/image/judgement-unselected.svg",
      selected: "/image/judgement-selected.svg",
    },
    LISTENING: {
      unselected: "/image/listening-unselected.svg",
      selected: "/image/listening-selected.svg",
    },
    OBSERVATION: {
      unselected: "/image/observation-unselected.svg",
      selected: "/image/observation-selected.svg",
    },
    PERSEVERANCE: {
      unselected: "/image/perseverance-unselected.svg",
      selected: "/image/perseverance-selected.svg",
    },
  };

  const keyMapping = {
    COMMUNICATION: "소통능력",
    EXECUTION: "실행력",
    FRIENDLINESS: "친화력",
    JUDGMENT: "판단력",
    LISTENING: "경청능력",
    OBSERVATION: "관찰력",
    PERSEVERANCE: "끈기력",
  };

  return (
    <Container>
      <img
        className="maincharacter"
        src={`/image/${character_strength}.svg`}
        alt="character_strength"
      />
      <Chips>
        {Object.entries(isstrength).map(([key, value]) => {
          const koreanKey = keyMapping[key];

          return (
            <ChipContainer
              key={key}
              className={key}
              keyType={key}
              value={value}
              onClick={() => value > 0 && handleChipClick(koreanKey)}
            >
              {value > 0 ? (
                <>
                  <img
                    className="chipimg"
                    src={imagePaths[key].selected}
                    alt={`${key} icon`}
                  />
                  <div className="chipValue">
                    {koreanKey} <span className="valueStyle">+{value}</span>
                  </div>
                </>
              ) : (
                <img src={imagePaths[key].unselected} alt={`${key} icon`} />
              )}
            </ChipContainer>
          );
        })}
      </Chips>
    </Container>
  );
}

export default BodyCharacter;
