import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 50%;

  .logoimg {
  }

  .text-wrapper {
    font-size: var(--button-02);
    font-weight: var(--font-weight-bold);
  }
`;
function MainBody() {
  return (
    <Container>
      <img className="logoimg" alt="Logo" src="/image/biglogo.svg" />
      <p className="text-wrapper">지인의 리뷰로 나를 알아보는 강약점 발굴 서비스</p>
    </Container>
  );
}

export default MainBody;
