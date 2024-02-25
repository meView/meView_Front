import React from "react";
import InformCardBottom from "../../../util/InformCardBottom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 16px;
`;

function InformCard() {
  return (
    <Container>
      <InformCardBottom
        mainMessage="질문지를 생성하고 리뷰를 받아봐요 :)"
        subMessage="질문지 결과에 따라서 강약점을 모아서 보여드려요."
      />
    </Container>
  );
}

export default InformCard;
