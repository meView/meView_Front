import React from "react";
import InformCardBottom from "../../../util/InformCardBottom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { totalStrengthSelector } from "../../../recoil/StrengthAtom";
import { totalWeaknessSelector } from "../../../recoil/StrengthAtom";

const Container = styled.div`
  margin-top: 16px;
`;

function InformCard() {
  const location = useLocation();
  const totalStrength = useRecoilValue(totalStrengthSelector);
  const totalWeakness = useRecoilValue(totalWeaknessSelector);

  const isStrengthActive = location.pathname === "/meview/capability/strength";
  const isWeaknessActive = location.pathname === "/meview/capability/weakness";

  const noReviewMessage = "질문지를 생성하고 리뷰를 받아봐요 :)";
  const subReviewMessage = "질문지 결과에 따라서 강약점을 모아서 보여드려요";

  let mainMessage = "리뷰를 통해 나만의 유일무이한 강점을 발굴해보세요 ;)"; // 강점인 경우 기본 메시지
  let subMessage = "역량 칩을 누르면 역량별 리뷰를 모아볼 수 있어요"; // 강점인 경우 기본 메시지
  if (totalStrength === 0 && isStrengthActive) {
    mainMessage = noReviewMessage;
    subMessage = subReviewMessage;
  } else if (totalWeakness === 0 && isWeaknessActive) {
    mainMessage = noReviewMessage;
    subMessage = subReviewMessage;
  } else if (isWeaknessActive) {
    mainMessage = "약점은 극복하면 그만! 주먹 불끈쥐고 강점으로 만들어봐요";
  }

  return (
    <Container>
      <InformCardBottom mainMessage={mainMessage} subMessage={subMessage} />
    </Container>
  );
}

export default InformCard;
