import styled from "styled-components";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getNicknameReview } from "api/Meview_API";
import ProjectReviewCard from "../project/ProjectReviewCard";
import { question_idState, nicknameState } from "recoil/ProjectListAtom";
import { userAccessTokenState } from "recoil/UserAtom";
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
  const access_token = useRecoilValue(userAccessTokenState);

  const {
    data: nicknameReviews,
    isLoading,
    isError,
  } = useQuery(
    ["nicknameReviews", question_id, nickname],
    () => getNicknameReview(access_token, question_id, nickname),
    {
      enabled: !!question_id && !!nickname,
    }
  );

  if (isLoading) return <div></div>;
  if (isError) return <div>Error occurred</div>;

  const strengthReviews = nicknameReviews?.STRENGTH ?? [];
  const weaknessReviews = nicknameReviews?.WEAKNESS ?? [];

  const strengthReviewCount = strengthReviews.length;
  const weaknessReviewCount = weaknessReviews.length;

  return (
    <>
      {strengthReviewCount > 0 && (
        <>
          <TopDescrip nickname={nickname} strength={"강점"} />
          <Container>
            {strengthReviews.map((review, index) => (
              <ProjectReviewCard
                key={`strength-${index}`}
                chipName={review.chip_name}
                reviewDescription={review.review_description}
              />
            ))}
          </Container>
          {weaknessReviewCount > 0 && <Divider />}
        </>
      )}
      {weaknessReviewCount > 0 && (
        <>
          <TopDescrip nickname={nickname} strength={"약점"} />
          <Container>
            {weaknessReviews.map((review, index) => (
              <ProjectReviewCard
                key={`weakness-${index}`}
                chipName={review.chip_name}
                reviewDescription={review.review_description}
              />
            ))}
          </Container>
        </>
      )}
    </>
  );
}

export default NickreviewBody;
