import styled from "styled-components";
import TopNav from "../../components/meview/TopNav";

const Container = styled.div`
  height: 100vh;
`;

function MeviewStrength() {
  return (
    <Container>
      <TopNav />
      <h1>MeviewStrength</h1>
    </Container>
  );
}

export default MeviewStrength;
