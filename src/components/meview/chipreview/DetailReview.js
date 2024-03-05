import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { selectedChipInfoState } from "recoil/ProjectListAtom";
import { userAccessTokenState } from "recoil/UserAtom";
import { getStrengthChipDetail, getWeaknessChipDetail } from "api/Meview_API";
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
  const access_token = useRecoilValue(userAccessTokenState);


  const {
    data: strengthReviews,
    isLoading: isLoadingStrength,
    isError: isErrorStrength,
  } = useQuery(
    ["strengthChipDetail", selectedChipInfo?.name],
    () => getStrengthChipDetail(access_token, selectedChipInfo?.name),
    {
      enabled:
        !!selectedChipInfo?.name &&
        selectedChipInfo.strength !== "character_weakness",
    }
  );

  const {
    data: weaknessReviews,
    isLoading: isLoadingWeakness,
    isError: isErrorWeakness,
  } = useQuery(
    ["weaknessChipDetail", selectedChipInfo?.name],
    () => getWeaknessChipDetail(access_token, selectedChipInfo?.name),
    {
      enabled:
        !!selectedChipInfo?.name &&
        selectedChipInfo.strength === "character_weakness",
    }
  );

  if (isLoadingStrength || isLoadingWeakness) return <div></div>;
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
        {reviewChip.map((review, index) => (
          <CardContainer key={index}>
            <ReviewCard
              responder={review.response_responder}
              title={review.response_title}
              description={review.review_description}
              question_id={review.question_id}
            />
          </CardContainer>
        ))}
      </Container>
    </>
  );
}

export default DetailReview;
