import styled from "styled-components";
import MainBody from "../../components/main/MainBody";
import Login from "../../components/main/Login";

const Container = styled.div`
  height: 100vh;
  background-color: var(--mainpg);
`;

function Mainpage() {
  return (
    <Container>
      <MainBody />
      <Login />
    </Container>
  );
}

export default Mainpage;
