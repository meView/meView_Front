import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedChipInfoState } from "../../../recoil/StrengthAtom";
import ReviewCard from "./ReviewCard";

const Container = styled.div`
  padding: 24px 20px;
`;

function DetailReview() {
  const selectedChipInfo = useRecoilValue(selectedChipInfoState);

  return (
    <Container>
      <ReviewCard />
      {selectedChipInfo ? ( 
        <div>
          <span>{selectedChipInfo.name}</span>
          <span>{selectedChipInfo.strength}</span>
        </div>
      ) : (
        <div>선택된 칩 정보가 없습니다.</div> 
      )}
    </Container>
  );
}

export default DetailReview;
