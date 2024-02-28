import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedChipInfoState } from "../../../recoil/ProjectListAtom";

const StyledBox = styled.div`
  position: relative;
  margin: 0 20px;

  .title {
    font-size: 24px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: 34px;
  }
  .text-wrapper {
    color: var(--Gray-02);
  }
  .span {
    color: var(--primary);
    display: inline;
    box-shadow: inset 0 -20px 0 #fff37429;
  }
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

function TopDescription({ num }) {
  const selectedChipInfo = useRecoilValue(selectedChipInfoState);

  if (!selectedChipInfo) {
    return null;
  }

  const ment =
    selectedChipInfo.strength === "character_weakness"
      ? "아쉽다고 대답했어요"
      : "훌륭하다고 대답했어요";

  return (
    <StyledBox>
      <p className="title">
        <span className="span">
          총 {num}명
          <span className="rectangle" />
        </span>
        <span className="text-wrapper">이 민지님의 </span>
        <span className="span">{keyMapping[selectedChipInfo.name]}</span>
        <span className="text-wrapper">이</span>
        <br />
        <span className="text-wrapper"> {ment}</span>
      </p>
    </StyledBox>
  );
}

export default TopDescription;
