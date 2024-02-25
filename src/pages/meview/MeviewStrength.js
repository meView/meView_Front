import styled from "styled-components";
import TopNav from "../../components/meview/TopNav";
import ViewNav from "../../components/meview/ViewNav";
import BodyHeader from "../../components/meview/bodycontent/BodyHeader";
import BodyCharacter from "../../components/meview/bodycontent/BodyCharacter";

const Container = styled.div`
  height: 100vh;
`;

function MeviewStrength() {
  return (
    <Container>
      <TopNav />
      <ViewNav />
      <BodyHeader />
      <BodyCharacter />
    </Container>
  );
}

export default MeviewStrength;
