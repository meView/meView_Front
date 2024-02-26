import styled from "styled-components";
import ProjectIDCard from "./ProjectIDCard";
import { useRecoilValue } from "recoil";
import { projectStrengthState } from "../../../recoil/ProjectListAtom";

function ProjectBody() {
  const projectReviews = useRecoilValue(projectStrengthState);

  return (
    <div>
      {Object.entries(projectReviews).map(([nickname, reviews]) => (
        <ProjectIDCard
          key={nickname}
          nickname={nickname}
          reviews={reviews}
        />
      ))}
    </div>
  );
}

export default ProjectBody;
