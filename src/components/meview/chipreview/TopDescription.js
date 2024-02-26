import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import {
  selectedChipInfoState,
  totalStrengthReviewSelector,
  totalWeaknessReviewSelector,
} from "../../../recoil/StrengthAtom";


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

function TopDescription() {
  const selectedChipInfo = useRecoilValue(selectedChipInfoState);
  const totalStrengthReviews = useRecoilValue(totalStrengthReviewSelector);
  const totalWeaknessReviews = useRecoilValue(totalWeaknessReviewSelector);

  
  const totalReviews = selectedChipInfo.strength === "character_weakness" ? totalWeaknessReviews : totalStrengthReviews;
  const ment =
    selectedChipInfo.strength === "character_weakness"
      ? "이런 부분에 대해 아쉽다고 대답했어요"
      : "훌륭하다고 대답했어요"; 
 


  return (
    <StyledBox>
      <p className="title">
        <span className="span">
          총 {totalReviews}명
          <span className="rectangle" />
        </span>
        <span className="text-wrapper">이 민지님의 </span>
        <span className="span">{selectedChipInfo.name}</span>
        <span className="text-wrapper">이</span>
        <br />
        <span className="text-wrapper"> {ment}</span>
      </p>
    </StyledBox>
  );
}

export default TopDescription;

// 판단력 character_strength;
