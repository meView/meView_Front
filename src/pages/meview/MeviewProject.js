import styled from "styled-components";
import TopNav from "../../components/meview/capability/TopNav";
import ViewNav from "../../components/meview/capability/ViewNav";
import ProjectCollection from "../../components/meview/project/ProjectCollection";

const Container = styled.div`
  
`;

function MeviewProject() {
  return (
    <Container>
      <TopNav />
      <ViewNav />
      <ProjectCollection />
    </Container>
  );
}

export default MeviewProject;
