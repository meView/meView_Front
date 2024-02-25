import styled from "styled-components";
import strenght from "../../../api/meview_capability/strength";

const Container = styled.div`
  img {
    margin: 0 auto;
  }
`;

const Chips = styled.div`


`;

function BodyCharacter() {
  return (
    <Container>
      <img src="/image/character_strength.svg" alt="character_strength" />
      <Chips>
        <img src="/image/communication-unselected.svg" alt="communication" />
        <img src="/image/execution-unselected.svg" alt="executive" />
        <img src="/image/friendliness-unselected.svg" alt="friendliness" />
        <img src="/image/judgment-unselected.svg" alt="judgment" />
        <img src="/image/listening-unselected.svg" alt="listening" />
        <img src="/image/observation-unselected.svg" alt="observation" />
        <img src="/image/perseverance-unselected.svg" alt="perseverance" />
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
