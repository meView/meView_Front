import styled from "styled-components";
import ProjectReviewCard from "./ProjectReviewCard";

const Container = styled.div`
  padding: 32px 20px;
  border-top: 8px solid var(--Gray-14);
`;
const NickName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--Gray-01);
  padding-left: 8px;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 0 6px 0;

  .arrow {
    position: absolute;
    right: 0;
  }
`;

function ProjectIDCard({ nickname, reviews }) {
  return (
    <Container>
      <NickName>
        <span>{nickname}</span>
        <img className="arrow" src="/image/rightarrow.svg" alt="arrow" />
      </NickName>
      {reviews.map((review) => (
        <ProjectReviewCard
          key={review.id}
          chipName={review.chip_name}
          reviewDescription={review.review_description}
        />
      ))}
    </Container>
  );
}

export default ProjectIDCard;

const Underline = styled.div``;
