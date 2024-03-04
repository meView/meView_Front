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
`;

const StyledButton = styled.div`
  padding: 0 20px;
`;

const BackButton = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background-image: url("./image/button-back.svg");
  &:hover {
    background-image: url("./image/button-back-hover.svg");
  }
  transition: background-image 0.1s;
`;

const ForwardButton = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background-image: url("./image/button-forward.svg");
  &:hover {
    background-image: url("./image/button-forward-hover.svg");
  }
  transition: background-image 0.1s;
`;

function ArrowContainer() {
  const [mainpage, setMainpage] = useRecoilState(mainpageState);

  const goBack = () => {
    if (mainpage > 1) {
      setMainpage(mainpage - 1);
    }
  };
  const goForward = () => {
    if (mainpage < 4) {
      setMainpage(mainpage + 1);
    }
  };

  return (
    <Container>
      <StyledButton>
        {mainpage > 1 && <BackButton onClick={goBack}></BackButton>}
      </StyledButton>
      <StyledButton>
        {mainpage < 4 && <ForwardButton onClick={goForward}></ForwardButton>}
      </StyledButton>
    </Container>
  );
}

export default ArrowContainer;
