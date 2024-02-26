import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 0 20px;
  .toppadding {
    margin-top: 40px;
  }
`;
const ArrowContainer = styled.div`
  display: flex;
  height: 48px;
  
  justify-content: flex-start;
  align-items: center;

  img {
    cursor: pointer;
  }

  .proojectname {
    font-size: 24px;
    font-weight: bold;
    color: var(--Gray-01);
    padding-left: 8px;
  }
`;

function ProjectreviewHead() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <div className="toppadding"></div>
      <ArrowContainer>
        <img
          className="arrow"
          src="/image/arrowback-project.svg"
          alt="arrowback"
          onClick={handleBackClick}
        />
        <p className="proojectname">프로젝트 리뷰</p>
      </ArrowContainer>
    </Container>
  );
}

export default ProjectreviewHead;
