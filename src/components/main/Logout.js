import { useRecoilValue } from "recoil";
import { userInfoState } from "recoil/UserAtom";
import { useNavigate } from "react-router-dom";

function Logout() {
  const userInfo = useRecoilValue(userInfoState);
  const userLoginType = userInfo ? userInfo.user_login_type : null;
  const navigate = useNavigate();

  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const LOGOUT_REDIRECT_URI = process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI;
  const kakaoLogoutLink = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;

  const LogoutButton = () => {
    // 로컬 스토리지에 저장된 모든 데이터 삭제
    localStorage.removeItem("localStorage");

    if (userLoginType === "KAKAO") {
      window.location.href = kakaoLogoutLink;
    } else if (userLoginType === "GOOGLE") {
      navigate("/");
    } else {
      navigate("/");
    }
  };

  return (
    <div onClick={LogoutButton} style={{ cursor: "pointer" }}>
      로그아웃
    </div>
  );
}

export default Logout;
