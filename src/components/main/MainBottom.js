import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 50%;

  .tooltip {
    margin: 0 0 6px 20px;
    align-self: flex-start;
  }

  .button-img {
    width: calc(100% - 40px);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0 0 8px;
  }
  .imglogin {
    width: 100%;
    height: auto;
  }
  .marginbottom {
    margin-bottom: 16px;
  }
`;

function MainBottom() {
  return (
    <Container>
      <img className="tooltip" alt="tool_tip" src="/image/tooltip.svg" />
      <button className="button-img">
        <img className="imglogin" alt="kakao" src="/image/kakao-button.svg" />
      </button>
      <button className="button-img">
        <img className="imglogin" alt="google" src="/image/google-button.svg" />
      </button>
      <div className="marginbottom"> </div>
    </Container>
  );
}

export default MainBottom;
