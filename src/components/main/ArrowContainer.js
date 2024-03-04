import styled from "styled-components";
import { mainpageState } from "recoil/MainpageAtom";
import { useRecoilState } from "recoil";

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  max-width: 500px;
  width: 100%;
  align-items: center;
  padding: 32px 0 0;
  .button {
    padding: 0 20px;
    img {
      cursor: pointer;
    }
  }
`;

function ArrowContainer() {
  const [mainpage, setMainpage] = useRecoilState(mainpageState);


  // mainpage가 1보다 작을 때는 뒤로가기 버튼을 숨김
  const goBack = () => {
    if (mainpage > 1) {
      setMainpage(mainpage - 1);
    }
  };

  // mainpage가 3보다 클 때는 앞으로가기 버튼을 숨김
  const goForward = () => {
    if (mainpage < 4) {
      setMainpage(mainpage + 1);
    }
  };

  return (
    <Container>
      <div className="button">
        {mainpage > 1 && (
          <img
            src="./image/button-back.svg"
            alt="left-arrow"
            onClick={goBack}
          />
        )}
      </div>
      <div className="button">
        {mainpage < 4 && (
          <img
            src="./image/button-forward.svg"
            alt="right-arrow"
            onClick={goForward}
          />
        )}
      </div>
    </Container>
  );
}

export default ArrowContainer;
