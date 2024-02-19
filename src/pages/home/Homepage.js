import styled from "styled-components";
import Myhome from "./Myhome";

const Container = styled.div`
  height: 100vh;
  color: white;
`;

function Homepage() {
  return (
    <Container>
      <Myhome />
    </Container>
    // page 설정해서 Myhome or Mypage로 이동하도록 설정할 예정
  );
}

export default Homepage;
