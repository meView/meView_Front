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
  );
}

export default Homepage;
