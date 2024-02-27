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
      {projectReviews.map((review) => (
        <ProjectIDCard
          key={review.response_responder}
          nickname={review.response_responder}
          reviews={review.strengths} // strengths 배열 전체를 reviews prop으로 전달
        />
      ))}
    </div>
  );
}
export default ProjectBody;
