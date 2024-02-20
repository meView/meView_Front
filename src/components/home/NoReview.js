import styled from "styled-components";

const Container = styled.div`
  font-weight: var(--font-weight-bold);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  padding-bottom: 130px;
  transform: translate(-50%, -50%);
  color: var(--Gray-02);

  .title {
    font-size: var(--subtitle-01);
    line-height: 28px;
    margin-bottom: 4px;
  }
  .description {
    font-size: var(--button-03);
    line-height: 24px;
  }
`

function NoReview() {
  return (
    <Container>
      <p className="title">아직 리뷰가 없어요!</p>
      <p className="description">나의 강약점을 발굴하러 가요!</p>
    </Container>
  )
}

export default NoReview;
