import styled from "styled-components";
import BodyHeader from "../../components/meview/bodycontent/BodyHeader";
import BodyCharacter from "../../components/meview/bodycontent/BodyCharacter";
import MeviewContent from "../../components/meview/layout/MeviewContent";
import BodySelect from "../../components/meview/layout/BodySelect";

const Container = styled.div`
  height: 100vh;
`;

function MeviewStrength() {
  return (
    <Container>
      <MeviewContent />
      <BodyHeader />
      <BodyCharacter />
      <BodySelect />
    </Container>
  );
}

export default MeviewStrength;
