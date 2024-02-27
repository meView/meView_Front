import styled from "styled-components";
import ProjectList from "./ProjectList";
import { useRecoilValue } from "recoil";
import { projectListState } from "../../../recoil/ProjectListAtom";
import NoReview from "components/home/NoReview";
import Bottombar from "components/home/Bottombar";

const Container = styled.div`
  margin: 16px 0 0;
  padding-bottom: 32px;
`;

const PJList = styled.div`
  padding: 16px 0 0;
`;


function ProjectCollection() {
  const projectData = useRecoilValue(projectListState);

  if (!projectData || projectData.length === 0) {
    return (
      <>
        <NoReview />
        <Bottombar />
      </>
    );
  }

  return (
    <Container>
      {projectData.map((project) => (
        <PJList key={project.question_id}>
          <ProjectList
            projectname={project.question_title}
            count={project.count}
          />
        </PJList>
      ))}
    </Container>
  );
}

export default ProjectCollection;
