import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${( {$isHovered} ) => $isHovered === 'true' ? "#2a291e" : "var(--Gray-14)" };
  margin: 0px 20px 16px 20px;
  color: white;
  height: 96px;
  border-radius: 8px;
  display: flex;
  border-right: solid 8px var(--Gray-13);
  cursor: pointer;

  .question-title {
    margin: 0px;
    height: 48px;
    display: flex;
  }
  .question-icon {
    width: 64px;
    height: 64px;
    padding: 0 12px 0 12px;
    margin-top: auto;
    margin-bottom: auto;
  }
  .question-text {
    font-size: var(--subtitle-02);
    color: var(--Gray-02);
    height: 24px;
    line-height: 24px;
    padding-top: 16px;
  }
  .copy {
    max-width: 372px;
    width: calc(100vw - 124px);
    height: 48px;
    padding-top: 0px;
  }
  .arrow-icon {
    width: 20px;
    height: 20px;
    padding-top: 20px;
    padding-left: 4px;
  }
`;

function ListItem(props) {
  const [isHovered, setIsHovered] = useState(props.isHovered);
  const [isHoveredLink, setIsHoveredLink] = useState(props.isHoveredLink);

  return (
    <Container $isHovered={isHovered}>
      <img
        className="question-icon"
        alt="question icon"
        src="./image/question-icon.svg"
        onMouseEnter={() => setIsHovered("true")}
        onMouseLeave={() => setIsHovered("false")}
      />
      <div>
        <div
          className="question-title"
          onMouseEnter={() => setIsHovered("true")}
          onMouseLeave={() => setIsHovered("false")}
          onClick={() => {
            /* 질문지 이동 */
            props.onQuestionClick();
          }}
        >
          <p className="question-text">{props.question_title}</p>
          <img
            className="arrow-icon"
            alt="arrow icon"
            src="./image/arrow-icon.svg"
          />
        </div>
        <div className="copy"
            onMouseEnter={() => setIsHoveredLink("hover")}
            onMouseLeave={() => setIsHoveredLink("button")}>
          <img
            className="copy-button"
            alt="copy button"
            src={`./image/link-copy-${isHoveredLink}.svg`}
            onClick={() => {
              /* 링크 복사 */
              props.onLinkClick();
            }}
          />
        </div>
      </div>
    </Container>
  );
}

export default ListItem;
