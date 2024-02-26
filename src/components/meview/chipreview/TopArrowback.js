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
  padding: 0 0 32px;
  justify-content: flex-start;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

function TopArrowback() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };


  return (
    <Container>
      <div className="toppadding"></div>
      <ArrowContainer>
        <img className="arrow" src="/image/toparrowback.svg" alt="arrowback" onClick={handleBackClick} />
      </ArrowContainer>
    </Container>
  );
}

export default TopArrowback;
