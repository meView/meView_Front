import styled from "styled-components";
import TopNav from "../../components/meview/layout/TopNav";
import ViewNav from "../../components/meview/layout/ViewNav";
import BodyHeader from "../../components/meview/bodycontent/BodyHeader";
import BodyCharacter from "../../components/meview/bodycontent/BodyCharacter";
import MeviewContent from "../../components/meview/layout/MeviewContent";

const Container = styled.div`
  height: 100vh;
`;

function MeviewStrength() {
  return (
    <Container>
      <MeviewContent />
      <BodyHeader />
      <BodyCharacter />
    </Container>
  );
}

export default MeviewStrength;
