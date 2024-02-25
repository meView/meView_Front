import styled from "styled-components";
import TopNav from "../../components/meview/TopNav";
import ViewNav from "../../components/meview/ViewNav";

const Container = styled.div`
  height: 100vh;
`;

function MeviewStrength() {
  return (
    <Container>
      <TopNav />
      <ViewNav />
      <h1>MeviewStrength</h1>
    </Container>
  );
}

export default MeviewStrength;
