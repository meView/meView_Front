import styled from "styled-components";

const Container = styled.div`
  border-radius: 12px;
  background-color: var(--Gray-14);
  padding: 20px;
  margin: 16px 0 0;

  .discription {
    font-size: 16px;
    color: var(--Gray-05);
  }
  @media (max-width: 768px) {
    .discription {
      font-size: 13.5px;
    }
  }
  .Chip {
    padding: 0 0 16px;
    border-bottom: 2px solid var(--Gray-13);
  }
  .discription {
    padding: 16px 0 0;
  }
`;

function ProjectReviewCard({ chipName, reviewDescription }) {
  return (
    <Container>
      <div className="Chip"> {chipName} </div>
      <div className="discription"> {reviewDescription}</div>
    </Container>
  );
}

export default ProjectReviewCard;
