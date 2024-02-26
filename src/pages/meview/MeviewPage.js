import styled from "styled-components";
import BodyHeader from "../../components/meview/capability/BodyHeader";
import BodyCharacter from "../../components/meview/capability/BodyCharacter";

import BodySelect from "../../components/meview/capability/BodySelect";
import InformCard from "../../components/meview/capability/InformCard";
import TopNav from "../../components/meview/capability/TopNav";
import ViewNav from "../../components/meview/capability/ViewNav";





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
      <BodySelect />
      <InformCard />
    </Container>
  );
}
export default MeviewStrength;
