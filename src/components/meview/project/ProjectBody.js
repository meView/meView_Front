import styled from "styled-components";
import ProjectIDCard from "./ProjectIDCard";
import { useRecoilValue } from "recoil";
import { selectedStrengthState } from "../../../recoil/ProjectListAtom";
import { useQuery } from "react-query";
import { getProjectStrength, getProjectWeakness } from "api/Meview_API";
import { question_idState } from "recoil/ProjectListAtom";
import { userAccessTokenState } from "recoil/UserAtom";
import NoReview from "components/home/NoReview";

const NoReviewContainer = styled.div`
  margin-top: -30px;
`;

function ProjectBody() {
  const selectedStrength = useRecoilValue(selectedStrengthState);
  const question_id = useRecoilValue(question_idState);
  const access_token = useRecoilValue(userAccessTokenState);

  // 강점, 약점 데이터 가져오기
  const {
    data: projectStrengthReviews,
    isLoading: isLoadingStrength,
    isError: isErrorStrength,
  } = useQuery(
    ["nicknameReviews_strength", question_id],
    () => getProjectStrength(access_token, question_id),
    {
      enabled: !!question_id,
    }
  );

  const {
    data: projectWeaknessReviews,
    isLoading: isLoadingWeakness,
    isError: isErrorWeakness,
  } = useQuery(
    ["nicknameReviews_weakness", question_id],
    () => getProjectWeakness(access_token, question_id),
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

  console.log(projectReviews);
  const ProjectReviewLength = projectReviews.length;
  if (ProjectReviewLength === 0) {
    return (
      <NoReviewContainer>
        <NoReview />
      </NoReviewContainer>
    );
  }

  return (
    <div>
      {projectReviews.map((review, index) => {
        if (review.reviews.length !== 0) {
          return (
            <ProjectIDCard
              key={index}
              nickname={review.response_responder}
              reviews={review.reviews}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
export default ProjectBody;
