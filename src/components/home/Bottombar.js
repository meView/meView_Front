import { useRecoilState } from "recoil";
import styled from "styled-components";
import { linkToastState } from "../../recoil/HomeAtom";
import Toast from "../../util/Toast";

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
  padding-top: 20px;
  background: linear-gradient(180deg, rgba(23, 23, 23, 0) 0%, var(--Gray-15) 80%);

  .leftside {
  }
  .rightside {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;

function Bottombar() {

  const [showToast, setShowToast] = useRecoilState(linkToastState);

  return (
    <Container>
      {showToast && <Toast text="설문지 링크가 복사되었어요!" onClick={()=>{ 
        setShowToast(false);
      }}/>}
      <Content>
        <div className="leftside"></div>
        <button className="rightside">
          <img alt="createQ" src="/image/create-q-button.svg" />
        </button>
      </Content>
    </Container>
  );
}

export default Bottombar;