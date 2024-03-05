import styled from "styled-components";

const Container = styled.div`
  font-weight: var(--font-weight-bold);
  text-align: center;
  width: 100%;
  height: calc(100vh - 208px);
  color: var(--Gray-02);
  position: relative;

  .text-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
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
      <div className="text-box">
        <p className="title">아직 리뷰가 없어요!</p>
        <p className="description">나의 강약점을 발굴하러 가요!</p>
      </div>
    </Container>
  )
}

export default NoReview;
