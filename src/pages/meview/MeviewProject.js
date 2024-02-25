import MeviewContent from "../../components/meview/layout/MeviewContent";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

function MeviewProject() {
  return (
    <Container>
      <MeviewContent />
      <h1>Project로 보기</h1>
    </Container>
  );
}

export default MeviewProject;
