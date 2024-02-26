import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  font-weight: bold;
  color: var(--Gray-01);
  font-size: 18px;
`;
const Profile = styled.div`
  margin: 64px 0 24px;
  padding: 19px 16px;
  background-color: var(--Gray-14);
  border-radius: 12px;
  display: flex;
  align-items: center;

  .email {
    padding-left: 16px;
  }
`;
const BodyContainer = styled.div`
  padding: 24px 0 16px 0;
  border-bottom: 2px solid var(--Gray-14);
  cursor: pointer;
`;

function MypageBody() {
  return (
    <Container>
      <Profile>
        <img className="profileimg" src="image/profile.svg" alt="profile" />
        <span className="email"> 태건아이디@kakao.com </span>
      </Profile>
      <BodyContainer>로그아웃</BodyContainer>
      <BodyContainer>서비스 소개</BodyContainer>
    </Container>
  );
}

export default MypageBody;
