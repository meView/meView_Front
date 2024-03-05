import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userInfoState } from "recoil/UserAtom";
import Logout from "components/main/Logout";

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
  // const userInfo = useRecoilValue(userInfoState);
  // const useremail = userInfo.user_email;

  return (
    <Container>
      <Profile>
        <img className="profileimg" src="image/profile.svg" alt="profile" />
        {/* <span className="email"> {useremail} </span> */}
      </Profile>
      <BodyContainer>서비스 소개</BodyContainer>
      <BodyContainer>
        <Logout>로그아웃</Logout>
      </BodyContainer>
    </Container>
  );
}

export default MypageBody;
