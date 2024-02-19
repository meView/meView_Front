import Bottombar from "../../components/home/Bottombar";
import TopNav from "../../components/home/TopNav";
import styled from "styled-components";

const Container = styled.div`
  
`;

function Myhome() {
  return (
    <Container>
      <TopNav />
      <h1>body</h1>
      <Bottombar />
    </Container>
  );
}

export default Myhome;
