import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import {
  getStrengthChipDetail,
  getWeaknessChipDetail,
} from "../../../api/Meview_API";
import { selectedChipInfoState } from "../../../recoil/StrengthAtom";
import ReviewCard from "./ReviewCard";
import TopDescription from "./TopDescription";

const Container = styled.div`
  padding: 24px 20px 50px;
`;

const CardContainer = styled.div`
  padding: 0 0 20px;
`;

function DetailReview() {
  const selectedChipInfo = useRecoilValue(selectedChipInfoState);

  // 강점 리뷰 데이터 가져오기
  const {
    data: strengthReviews,
    isLoading: isLoadingStrength,
    isError: isErrorStrength,
  } = useQuery(
    ["strengthChipDetail", selectedChipInfo?.name],
    () => getStrengthChipDetail(selectedChipInfo?.name),
    {
      enabled:
        !!selectedChipInfo?.name &&
        selectedChipInfo.strength !== "character_weakness",
    }
  );

  // 약점 리뷰 데이터 가져오기
  const {
    data: weaknessReviews,
    isLoading: isLoadingWeakness,
    isError: isErrorWeakness,
  } = useQuery(
    ["weaknessChipDetail", selectedChipInfo?.name],
    () => getWeaknessChipDetail(selectedChipInfo?.name),
    {
      enabled:
        !!selectedChipInfo?.name &&
        selectedChipInfo.strength === "character_weakness",
    }
  );

  if (isLoadingStrength || isLoadingWeakness) return <div>Loading...</div>;
  if (isErrorStrength || isErrorWeakness) return <div>Error occurred</div>;

  // 현재 선택된 칩의 리뷰 데이터 결정
  const reviewChip =
    selectedChipInfo?.strength === "character_weakness"
      ? weaknessReviews
      : strengthReviews;

  return (
    <>
      <TopDescription num={reviewChip.length} />
      <Container>
        {reviewChip.map((review) => (
          <CardContainer key={review.question_id}>
            <ReviewCard
              responder={review.response_responder}
              title={review.response_title}
              description={review.review_description}
            />
          </CardContainer>
        ))}
      </Container>
    </>
  );
}

export default DetailReview;
