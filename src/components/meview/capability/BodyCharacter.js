import styled from "styled-components";
import BodySelect from "./BodySelect";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getStrength, getWeakness } from "../../../api/Meview_API";
import { selectedChipInfoState } from "../../../recoil/ProjectListAtom";
import { useEffect } from "react";
import { imageLoadingState } from "../../../recoil/ProjectListAtom";
import { isStrengthActiveState } from "recoil/ProjectListAtom";
import { userAccessTokenState } from "recoil/UserAtom";

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
  /* drop-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25); */
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
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

  transition: transform 0.2s;
  // hover -> 칩의 개수가 0 이상일때만 크기 1.1 증가 + 0.3초 동안 애니메이션
  &:hover {
    ${({ value }) => value > 0 && "transform: scale(1.05);"}
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
const PaddingBottom = styled.div`
  padding-bottom: 30px;
`;

const keyMapping = {
  COMMUNICATION: "소통능력",
  EXECUTION: "실행력",
  FRIENDLINESS: "친화력",
  JUDGMENT: "판단력",
  LISTENING: "경청능력",
  OBSERVATION: "관찰력",
  PERSEVERANCE: "끈기력",
};
function BodyCharacter() {
  const setChipInfo = useSetRecoilState(selectedChipInfoState);
  const [imagesLoaded, setImagesLoaded] = useRecoilState(imageLoadingState);
  const navigate = useNavigate();
  const isStrengthActive = useRecoilValue(isStrengthActiveState);
  const access_token = useRecoilValue(userAccessTokenState);

  const character_strength =
    isStrengthActive === "strength"
      ? "character_strength"
      : "character_weakness";

  useEffect(() => {
    setImagesLoaded(false);
    const imageUrls = Object.values(imagePaths).flatMap((obj) => [
      obj.selected,
      obj.unselected,
    ]);
    imageUrls.push(`/image/${character_strength}.svg`);
    let loadedImages = 0;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = () => {
        loadedImages++;
        if (loadedImages === imageUrls.length) {
          setImagesLoaded(true);
        }
      };
      img.src = url;
    });
  }, [character_strength, setImagesLoaded]);

  // api 연동
  // const {
  //   data: strength,
  //   isLoading: isLoadingStrength,
  //   error: isErrorStrength,
  // } = useQuery(["strength", access_token], () => getStrength(access_token), {
  //   enabled: !!access_token,
  // });
  const {
    data: strength,
    isLoading: isLoadingStrength,
    error: isErrorStrength,
  } = useQuery("strength", getStrength);
  const {
    data: weakness,
    isLoading: isLoadingWeakness,
    error: isErrorWeakness,
  } = useQuery("weakness", getWeakness);

  if (isLoadingStrength || isLoadingWeakness) {
    return <></>;
  }

  if (isErrorStrength || isErrorWeakness) {
    return <div>An error has occurred: ' + error.message</div>;
  }
  console.log(strength);
  console.log(weakness);

  //칩 별 총 개수
  const totalStrength = Object.values(strength).reduce(
    (total, currentValue) => total + currentValue,
    0
  );
  const totalWeakness = Object.values(weakness).reduce(
    (total, currentValue) => total + currentValue,
    0
  );
  const isstrength = isStrengthActive === "strength" ? strength : weakness;

  const handleChipClick = (chipName) => {
    const ChipInfo = {
      name: chipName,
      strength: character_strength,
    };

    setChipInfo(ChipInfo);
    navigate("./chipreview");
  };

  if (!imagesLoaded) {
    return <></>;
  }

  return (
    <>
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
                onClick={() => value > 0 && handleChipClick(key)}
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
      <BodySelect totalStrength={totalStrength} totalWeakness={totalWeakness} />{" "}
      /
      <PaddingBottom />
    </>
  );
}

export default BodyCharacter;
