import styled from "styled-components";
import ProjectIDCard from "./ProjectIDCard";
import { useRecoilValue } from "recoil";
import {
  projectStrengthState,
  projectWeaknessState,
  selectedStrengthState,
} from "../../../recoil/ProjectListAtom";

function ProjectBody() {
  const projectStrengthReviews = useRecoilValue(projectStrengthState);
  const projectWeaknessReviews = useRecoilValue(projectWeaknessState);

  const selectedStrength = useRecoilValue(selectedStrengthState);

  const projectReviews =
    selectedStrength === "Strength"
      ? projectStrengthReviews
      : projectWeaknessReviews;

  return (
    <div>
      {Object.entries(projectReviews).map(([nickname, reviews]) => (
        <ProjectIDCard key={nickname} nickname={nickname} reviews={reviews} />
      ))}
    </div>
  );
}

export default ProjectBody;
