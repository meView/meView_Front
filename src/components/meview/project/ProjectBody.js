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
      {projectReviews.map((review, index) => (
        <ProjectIDCard
          key={index}
          nickname={review.response_responder}
          reviews={
            selectedStrength === "Strength"
              ? review.strengths
              : review.weaknesses
          }
        />
      ))}
    </div>
  );
}
export default ProjectBody;
