import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const StyledBox = styled.div`
  position: relative;
  margin: 32px 20px 68px;

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
  const location = useLocation();
  const isStrengthActive = location.pathname === "/meview/capability/strength";

  const headerText = isStrengthActive ? "강점" : "약점";
  const emoji = isStrengthActive ? "💪🏻" : "✊🏻";
  const ending = isStrengthActive ? "은!" : "은..!";

  return (
    <StyledBox>
      <div className="rectangle" />
      <p className="title">
        <span className="text-wrapper">
          남들이 보는
          <br />
        </span>
        <span className="span">나의 </span>
        <span className="text-wrapper">{emoji}</span>
        <span className="span">{headerText}</span>
        <span className="text-wrapper">{ending}</span>
      </p>
    </StyledBox>
  );
}

export default BodyHeader;
