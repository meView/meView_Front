// const logoutWithKakao = () => {
//   // 클라이언트에서 카카오 로그인 토큰 제거
//   if (Kakao.Auth.getAccessToken()) {
//     Kakao.Auth.logout();
//     console.log("카카오 로그인 토큰이 제거되었습니다.");
//   }

//   const REST_API_KEY = "YOUR_REST_API_KEY";
//   const LOGOUT_REDIRECT_URI = encodeURIComponent("YOUR_LOGOUT_REDIRECT_URI");
//   window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
// };
