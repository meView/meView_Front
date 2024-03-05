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
    border-radius: 8px;
    font-size: var(--button-02);
    font-weight: var(--font-weight-bold);
    text-align: center;
    line-height: 50px;
    color: var(--Gray-12);
    cursor: pointer;
  }
  .team {
    width: 50%;
    height: 100%;
    border: solid 1px var(--Gray-12);
    border-right: solid 0.5px var(--Gray-12);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .friend {
    width: 50%;
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

function Segment2Btn(props) {
  const [team, setTeam] = useState(props.target === "TEAM" ? "selected" : "unselected");
  const [friend, setFriend] = useState(props.target === "FRIEND" ? "selected" : "unselected");

  useEffect(() => {
    if (props.target === "TEAM") {
      setTeam("selected");
      setFriend("unselected");
    } else if (props.target === "FRIEND") {
      setTeam("unselected");
      setFriend("selected");
    }
  }, [props.target]);

  return (
    <Container>
      <div className="inner-box">
        <div
          className={`team ${team}`}
          onClick={() => {
            props.onClickTeam();
          }}
        >
          프로젝트 팀원
        </div>
        <div
          className={`friend ${friend}`}
          onClick={() => {
            props.onClickFriend();
          }}
        >
          주변 지인
        </div>
      </div>
    </Container>
  );
}

export default Segment2Btn;
