import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { nicknameReviewState } from "../../../recoil/ProjectListAtom";
import ProjectReviewCard from "../project/ProjectReviewCard";
// eslint-disable-next-line no-unused-vars
import TopDescrip from "./TopDescrip";

const Container = styled.div`
  padding: 4px 20px 32px;
`;
const Divider = styled.div`
  border-top: 8px solid var(--Gray-14);
  margin: 0px 0 48px;
`;

function NickreviewBody() {
  const nicknameReviews = useRecoilValue(nicknameReviewState);
  const strengthReviews = nicknameReviews.STRENGTH;
  const weaknessReviews = nicknameReviews.WEAKNESS;
  const nickname = nicknameReviews.STRENGTH[0].response_responder;

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
