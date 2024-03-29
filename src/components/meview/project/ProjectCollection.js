import styled from "styled-components";
import ProjectList from "./ProjectList";
import NoReview from "components/home/NoReview";
import Bottombar from "components/home/Bottombar";
import { useRecoilValue } from "recoil";
import { userAccessTokenState } from "recoil/UserAtom";
import { useQuery } from "react-query";
import { getProjects } from "api/Meview_API";

const Container = styled.div`
  margin: 16px 0 0;
  padding-bottom: 32px;
`;

const PJList = styled.div`
  padding: 16px 0 0;
`;

function ProjectCollection() {
  const access_token = useRecoilValue(userAccessTokenState);

  const {
    data: projectData,
    isLoading,
    isError,
  } = useQuery(["nicknameReviews"], () => getProjects(access_token));

  if (isLoading) return <div></div>;
  if (isError) return <div>Error occurred</div>;

  if (!projectData || projectData.length === 0) {
    return (
      <>
        <NoReview box='288px' />
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
            question_id={project.question_id}
          />
        </PJList>
      ))}
    </Container>
  );
}

export default ProjectCollection;
