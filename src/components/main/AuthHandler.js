import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthHandler() {
  useEffect(() => {
    // 현재 URL에서 쿼리 파라미터 추출
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    const navigate = useNavigate();

    if (code) {
      // 인가 코드가 있으면 서버에 전달
      sendCodeToServer(code);
    }
  }, []);

  const sendCodeToServer = async (code) => {
    const response = await fetch(
      `http://localhost:4000/auth/kakao_login?code=${code}`,
      {
        method: "GET", // 또는 'POST', 서버 구현에 따라 달라질 수 있습니다.
        headers: {
          "Content-Type": "application/json",
        },
        // 필요한 경우 추가적인 보안 헤더나 데이터를 포함할 수 있습니다.
      }
    );

    if (!response.ok) {
      // 에러 처리
      console.error("서버로부터 응답을 받는데 실패했습니다.");
      return;
    }

    const data = await response.json();
    // 성공적으로 데이터를 받았을 때의 처리 로직
    console.log(data);
  };

  return <div>인증 처리 중...</div>;
}

export default AuthHandler;
