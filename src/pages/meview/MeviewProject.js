import styled from "styled-components";
import TopNav from "../../components/meview/capability/TopNav";
import ViewNav from "../../components/meview/capability/ViewNav";

const Container = styled.div`
  height: 100vh;
`;

function MeviewProject() {
  return (
    <Container>
      <TopNav />
      <ViewNav />
      <h1>Project로 보기</h1>
    </Container>
  );
}

export default MeviewProject;
