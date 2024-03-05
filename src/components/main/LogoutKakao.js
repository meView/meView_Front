function LogoutKakao() {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const LOGOUT_REDIRECT_URI = process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;

  const logoutKakao = () => {
    // localStorage에 저장된 유저정보 모두 삭제
    localStorage.removeItem("localStorage");
    window.location.href = link;
  };

  return (
    <>
      <div onClick={logoutKakao}>로그 아웃</div>
    </>
  );
}

export default LogoutKakao;
