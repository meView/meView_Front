import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  position: relative;
  margin: 32px 22px 68px;

  .rectangle {
    background-color: #fff37429;
    height: 20px;
    left: 0;
    position: absolute;
    top: 48px;
    width: 120px;
  }

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
  }
`;

function BodyHeader() {
  return (
    <StyledBox>
      <div className="rectangle" />
      <p className="title">
        <span className="text-wrapper">
          남들이 보는
          <br />
        </span>
        <span className="span">나의 </span>
        <span className="text-wrapper">💪🏻</span>
        <span className="span">강점</span>
        <span className="text-wrapper">은!</span>
      </p>
    </StyledBox>
  );
}

export default BodyHeader;
