import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--Gray-14);
  border-radius: 12px;
  height: 64px;
  position: relative;

  .inner-box {
    width: 100%;
    display: flex;
    width: calc(100% - 8px);
    height: 52px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: var(--button-02);
    font-weight: var(--font-weight-bold);
    text-align: center;
    line-height: 50px;
    color: var(--Gray-12);
    cursor: pointer;
  }
  .strength {
    width: 100%;
    height: 100%;
    border: solid 1px var(--Gray-12);
    border-right: solid 0.5px var(--Gray-12);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .weakness {
    width: 100%;
    height: 100%;
    border: solid 1px var(--Gray-12);
    border-left: solid 0.5px var(--Gray-12);
    border-right: solid 0.5px var(--Gray-12);
  }
  .both {
    width: 100%;
    height: 100%;
    border: solid 1px var(--Gray-12);
    border-left: solid 0.5px var(--Gray-12);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .unselected {
    &:hover {
      background-color: var(--Hover);
    }
  }
  .selected {
    background-color: var(--primary);
    color: var(--Gray-15);
    &:hover {
      background-color: var(--Hover-02);
    }
  }
`;

function Segment3Btn(props) {
  const [strength, setStrength] = useState(props.type === 'STRENGTH' ? "selected" : "unselected");
  const [weakness, setWeakness] = useState(props.type === 'WEAKNESS' ? "selected" : "unselected");
  const [both, setBoth] = useState(props.type === 'BOTH' ? "selected" : "unselected");

  useEffect(() => {
    if (props.type === "STRENGTH") {
      setStrength("selected");
      setWeakness("unselected");
      setBoth("unselected");
    } else if (props.type === "WEAKNESS") {
      setStrength("unselected");
      setWeakness("selected");
      setBoth("unselected");
    } else if (props.type === "BOTH") {
      setStrength("unselected");
      setWeakness("unselected");
      setBoth("selected");
    }
  }, [props.type]);

  return (
    <Container>
      <div className="inner-box">
        <div
          className={`strength ${strength}`}
          onClick={() => {
            props.onClickStrength();
          }}
        >
          강점
        </div>
        <div
          className={`weakness ${weakness}`}
          onClick={() => {
            props.onClickWeakness();
          }}
        >
          약점
        </div>
        <div
          className={`both ${both}`}
          onClick={() => {
            props.onClickBoth();
          }}
        >
          둘 다
        </div>
      </div>
    </Container>
  );
}

export default Segment3Btn;
