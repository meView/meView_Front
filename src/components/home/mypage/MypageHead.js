import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 0 20px;
  .toppadding {
    padding-top: 47px;
  }
`;
const ArrowContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: flex-start;
  align-items: center;

  img {
    cursor: pointer;
    margin-left: -2px;
  }

  .proojectname {
    font-size: 24px;
    font-weight: bold;
    color: var(--Gray-02);
    padding-left: 8px;
  }
`;

function MypageHead() {
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
        <p className="proojectname">마이페이지</p>
      </ArrowContainer>
    </Container>
  );
}

export default MypageHead;
