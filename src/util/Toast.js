import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`;

const Container = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  &.fade-out {
    animation: ${fadeOut} 0.5s ease-out forwards;
  }
  background-color: var(--Gray-02);
  height: 60px;
  border-radius: 8px;
  margin-left: 20px;
  margin-right: 20px;
  width: calc(100% - 40px);
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));

  .div-box {
    display: flex; /* Flexbox를 사용 */
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: space-between; /* 내용을 양 끝으로 정렬 */
    position: relative; /* 상대 위치로 변경, 필요에 따라 조정 */
    padding: 16px 16px; /* 좌우 패딩 */
    box-sizing: border-box;
    width: 100%; /* 너비 100% 유지 */
  }
  .text {
    flex: 1; /* 두 요소가 공간을 공유하도록 설정 */
    color: var(--Gray-15);
    font-weight: var(--font-weight-regular);
    font-size: var(--button-02);
    line-height: 26px;
    padding-right: 8px;
    width: 100%;
    white-space: nowrap;
  }
  .button {
    flex: 1; /* 두 요소가 공간을 공유하도록 설정 */
    /* 글씨는 왼쪽정렬 */
    text-align: right;
    white-space: nowrap;
    color: var(--Success);
    font-weight: var(--font-weight-bold);
    font-size: var(--button-02);
    line-height: 26px;
    width: 100%;
  }
  .button-text {
    /* float: right; */
    cursor: pointer;
  }
`;

function Toast({ text, onClick }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [onClick]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClick) {
        onClick();
      }
    }, 500);
  };

  return (
    <Container className={!isVisible ? "fade-out" : ""}>
      <div className="div-box">
        <div className="text">{text}</div>
        <div className="button">
          <span className="button-text" onClick={handleClose}>
            확인
          </span>
        </div>
      </div>
    </Container>
  );
}

export default Toast;
