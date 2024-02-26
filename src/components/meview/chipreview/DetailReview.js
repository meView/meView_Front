import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import {
  selectedChipInfoState,
  strengthChipDetailState,
  weaknessChipDetailState,
} from "../../../recoil/StrengthAtom";
import ReviewCard from "./ReviewCard";

const Container = styled.div`
  padding: 24px 20px;
`;

const CardContainer = styled.div`
  padding: 0 0 20px;
`;

function DetailReview() {
  const selectedChipInfo = useRecoilValue(selectedChipInfoState);
  const strengthReviews = useRecoilValue(strengthChipDetailState);
  const weaknessReviews = useRecoilValue(weaknessChipDetailState);

  const reviewChip =
    selectedChipInfo.strength === "character_weakness"
      ? weaknessReviews
      : strengthReviews;

  return (
    <Container>
      {reviewChip.map((review) => (
        <CardContainer key={review.review_id}>
          <ReviewCard
            responder={review.response_responder}
            title={review.response_title}
            description={review.review_description}
          />
        </CardContainer>
      ))}
    </Container>
  );
}

export default DetailReview;
