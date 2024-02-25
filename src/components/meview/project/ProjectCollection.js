import React from "react";
import styled from "styled-components";

import ProjectList from "./ProjectList";
import { useRecoilValue } from "recoil";
import { projectListState } from "../../../recoil/ProjectListAtom";

const Container = styled.div`
  margin: 16px 0 0;
  padding-bottom: 32px;
`;

const PJList = styled.div`
  padding: 16px 0 0;
`;

function ProjectCollection() {
  const projectData = useRecoilValue(projectListState);

  return (
    <Container>
      {projectData.map((project) => (
        <PJList>
          <ProjectList
            key={project.question_id}
            projectname={project.question_title}
            count={project.count}
          />
        </PJList>
      ))}
    </Container>
  );
}

export default ProjectCollection;
