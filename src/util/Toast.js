import styled from "styled-components";

const Container = styled.div`
  background-color: var(--Gray-02);
  height: 60px;
  border-radius: 8px;
  margin-left: 20px;
  margin-right: 20px;
  width: calc(100% - 40px);
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));

  .div-box {
    display: flex;
    position: absolute;
    padding-left: 16px;
    padding-right: 16px;
    top: 50%;
    transform: translate(0, -50%);
    box-sizing: border-box;
    width: 100%;
  }
  .text {
    color: var(--Gray-15);
    font-weight: var(--font-weight-regular);
    font-size: var(--button-02);
    line-height: 26px;
    padding-right: 8px;
    width: 100%;
    white-space: nowrap;
  }
  .button {
    color: var(--Success);
    font-weight: var(--font-weight-bold);
    font-size: var(--button-02);
    line-height: 26px;
    width: 100%;
  }
  .button-text {
    float: right;
    cursor: pointer;
  }
`;

function Toast(props) {
  return (
    <Container>
      <div className="div-box">
        <div className="text">{props.text}</div>
        <div className="button">
          <span
            className="button-text"
            onClick={() => {
              props.onClick();
            }}
          >
            확인
          </span>
        </div>
      </div>
    </Container>
  );
}

export default Toast;
