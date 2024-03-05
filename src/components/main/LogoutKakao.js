import { useRecoilState } from "recoil";
import { userInfoState, userAccessTokenState } from "recoil/UserAtom";

function LogoutKakao() {
  const [, setUserInfo] = useRecoilState(userInfoState);
  const [, setUserAccessToken] = useRecoilState(userAccessTokenState);

  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const LOGOUT_REDIRECT_URI = process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;

  const logoutKakao = () => {
 
    localStorage.removeItem("localStorage");
  
    window.location.href = link;
  };

  return (
    <div>
      <button onClick={logoutKakao}>카카오 로그아웃</button>
    </div>
  );
}

export default LogoutKakao;
