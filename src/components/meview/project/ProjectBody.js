import ProjectIDCard from "./ProjectIDCard";
import { useRecoilValue } from "recoil";
import { selectedStrengthState } from "../../../recoil/ProjectListAtom";
import { useQuery } from "react-query";
import { getProjectStrength, getProjectWeakness } from "api/Meview_API";
import { question_idState } from "recoil/ProjectListAtom";

function ProjectBody() {
  const selectedStrength = useRecoilValue(selectedStrengthState);
  const question_id = useRecoilValue(question_idState);

  // 강점, 약점 데이터 가져오기
  const {
    data: projectStrengthReviews,
    isLoadingStrength,
    isErrorStrength,
  } = useQuery(
    ["nicknameReviews", question_id],
    () => getProjectStrength(question_id),
    {
      enabled: !!question_id,
    }
  );

  // question_id->2로 임시로 수정하면 test가능
  const {
    data: projectWeaknessReviews,
    isLoading: isLoadingWeakness,
    isError: isErrorWeakness,
  } = useQuery(
    ["nicknameReviews", question_id],
    () => getProjectWeakness(question_id),
    {
      enabled: !!question_id,
    }
  );

  if (isLoadingStrength || isLoadingWeakness) {
    return <div></div>;
  }
  if (isErrorStrength || isErrorWeakness) {
    return <div>Error occurred</div>;
  }

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
          reviews={review.reviews}
        />
      ))}
    </div>
  );
}
export default ProjectBody;
