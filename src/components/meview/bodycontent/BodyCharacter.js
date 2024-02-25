import styled from "styled-components";
import strenght from "../../../api/meview_capability/strength";

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  position: relative;

  .maincharacter {
    margin: 0 auto;
  }
`;

const Chips = styled.div`
  position: absolute; // Container 내에서 절대 위치 사용
  width: 100%;

  img {
    position: absolute;
    backdrop-filter: blur(4px);
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &.communication {
      top: 236px;
      left: 13.6%;
      opacity: 1;
    }
    &.executive {
      top: 228px;
      left: 56%;
    }
    &.friendliness {
      top: 296px;
      left: 20%;
    }
    &.judgment {
      top: 60px;
      left: 48%;
    }
    &.listening {
      top: 126px;
      left: 58%;
    }
    &.observation {
      top: 108px;
      left: 12%;
    }
    &.perseverance {
      top: 362px;
      left: 52%;
    }
  }
`;
function BodyCharacter() {
  return (
    <Container>
      <img
        className="maincharacter"
        src="/image/character_strength.svg"
        alt="character_strength"
      />
      <Chips>
        <img
          className="communication"
          src="/image/communication-unselected.svg"
          alt="communication"
        />
        <img
          className="executive"
          src="/image/execution-unselected.svg"
          alt="executive"
        />
        <img
          className="friendliness"
          src="/image/friendliness-unselected.svg"
          alt="friendliness"
        />
        <img
          className="judgment"
          src="/image/judgment-unselected.svg"
          alt="judgment"
        />
        <img
          className="listening"
          src="/image/listening-unselected.svg"
          alt="listening"
        />
        <img
          className="observation"
          src="/image/observation-unselected.svg"
          alt="observation"
        />
        <img
          className="perseverance"
          src="/image/perseverance-unselected.svg"
          alt="perseverance"
        />
      </Chips>
    </Container>
  );
}

export default BodyCharacter;

// {
//   "판단력": 0,
//   "관찰력": 3,
//   "경청능력": 0,
//   "소통능력": 0,
//   "친화력": 3,
//   "실행력": 0,
//   "끈기력": 0
// }
{
  /* <p>판단력: {strenght.판단력}</p>
<p>관찰력: {strenght.관찰력}</p>
<p>경청능력: {strenght.경청능력}</p>
<p>소통능력: {strenght.소통능력}</p>
<p>친화력: {strenght.친화력}</p>
<p>실행력: {strenght.실행력}</p>
<p>끈기력: {strenght.끈기력}</p> */
}
