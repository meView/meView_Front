import styled from "styled-components";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getNicknameReview } from "../../../api/Meview_API";
import ProjectReviewCard from "../project/ProjectReviewCard";
import {
  question_idState,
  nicknameState,
} from "../../../recoil/ProjectListAtom";
import TopDescrip from "./TopDescrip";

const Container = styled.div`
  padding: 4px 20px 32px;
`;
const Divider = styled.div`
  border-top: 8px solid var(--Gray-14);
  margin: 0px 0 48px;
`;

function NickreviewBody() {
  const question_id = useRecoilValue(question_idState);
  const nickname = useRecoilValue(nicknameState);

  const {
    data: nicknameReviews,
    isLoading,
    isError,
  } = useQuery(
    ["nicknameReviews", question_id, nickname],
    () => getNicknameReview(question_id, nickname),
    {
      enabled: !!question_id && !!nickname,
    }
  );

  if (isLoading) return <div></div>;
  if (isError) return <div>Error occurred</div>;

  const strengthReviews = nicknameReviews?.STRENGTH ?? [];
  const weaknessReviews = nicknameReviews?.WEAKNESS ?? [];

  return (
    <>
      <TopDescrip nickname={nickname} strength={"강점"} />
      <Container>
        {strengthReviews.map((review, index) => (
          <ProjectReviewCard
            key={index}
            chipName={review.chip}
            reviewDescription={review.review_description}
          />
        ))}
      </Container>
      <Divider />

      <TopDescrip nickname={nickname} strength={"약점"} />
      <Container>
        {weaknessReviews.map((review, index) => (
          <ProjectReviewCard
            key={index}
            chipName={review.chip}
            reviewDescription={review.review_description}
          />
        ))}
      </Container>
    </>
  );
}

export default NickreviewBody;
