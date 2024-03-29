import { useRecoilState } from "recoil";
import styled from "styled-components";
import { linkToastState } from "../../recoil/HomeAtom";
import Toast from "../../util/Toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  position: fixed; /* 화면에 고정 */
  bottom: 0; /* 화면 바닥에 정렬 */
  max-width: 500px; /* 최대 너비 설정 */
  width: 100%; /* 화면 너비와 같게 설정 */
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 20px 24px;
  background: linear-gradient(
    180deg,
    rgba(23, 23, 23, 0) 0%,
    var(--Gray-15) 80%
  );

  .rightside {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;

const RightSideButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  background-color: var(--primary);
  border-radius: 200px;
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  width: 230px;
  height: 64px;
  color: var(--Gray-15);
  display: flex;
  align-items: center;
  justify-content: center;

  .textplus {
    font-size: 24px;
    padding: 0 4px 0 0;
  }

  &:hover {
    background-color: #fff594;
  }
`;

function Bottombar() {
  const [showToast, setShowToast] = useRecoilState(linkToastState);
  const navigate = useNavigate();

  const handleCreateQ = () => {
    navigate("/question");
  };

  const hideToast = () => setShowToast(false);
  const handleToastClose = () => {
    hideToast();
  };
  
  useEffect(() => {
    let timeoutId;
    if (showToast) {
      timeoutId = setTimeout(hideToast, 3500);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showToast, setShowToast]);

  return (
    <Container>
      {showToast && (
        <Toast text="질문지 링크가 복사되었어요!" onClick={handleToastClose} />
      )}
      <Content>
        <div className="leftside"></div>
        <RightSideButton onClick={handleCreateQ}>
          <span className="textplus">+ </span>
          <span className="text">질문지 생성</span>
        </RightSideButton>
      </Content>
    </Container>
  );
}

export default Bottombar;
