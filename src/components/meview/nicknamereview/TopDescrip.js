import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userInfoState } from "recoil/UserAtom";

const StyledBox = styled.div`
  position: relative;
  margin: 0 20px;

  .title {
    font-size: 24px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: 34px;
  }
  .text-wrapper {
    color: var(--Gray-02);
  }
  .span {
    color: var(--primary);
    display: inline;
    box-shadow: inset 0 -20px 0 #fff37429;
  }
`;

function TopDescrip({ strength, nickname }) {

  const userInfo = useRecoilValue(userInfoState);

  const user_nickname =
    userInfo?.user_nickname?.length === 3
      ? userInfo.user_nickname.substring(1)
      : userInfo?.user_nickname;

  return (
    <StyledBox>
      <p className="title">
        <span className="text-wrapper">{nickname}님이 생각하는 </span>
        <span className="span">
          {user_nickname}님의 {strength}
          <span className="rectangle" />
        </span>
        <span className="text-wrapper">은</span>
      </p>
    </StyledBox>
  );
}

export default TopDescrip;
