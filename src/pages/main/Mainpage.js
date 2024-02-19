import styled from "styled-components";
import MainBody from "../../components/main/MainBody";
import MainBottom from "../../components/main/MainBottom";

const Container = styled.div`
  height: 100vh;
  background-color: var(--mainpg);
`;

function Mainpage() {
  return (
    <Container>
      <MainBody/>
      <MainBottom />
    </Container>
  );
}

export default Mainpage;
