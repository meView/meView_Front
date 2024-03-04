import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%; 
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

const Position = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  bottom: 0px;

  .tooltip {
    margin: 0 0 6px 20px;
    align-self: flex-start;
  }

  .button-img {
    width: calc(100% - 40px);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0 0 8px;
  }
  .imglogin {
    width: 100%;
    height: auto;
  }
  .marginbottom {
    margin-bottom: 16px;
  }
`;

function Login() {
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  const navigate = useNavigate();

  const kakakologinHandler = () => {
    window.location.href = link;
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    if (code) {
      sendCodeToServer(code);
    }
  }, [navigate]); // useEffect 의존성 배열에 navigate 추가

  const sendCodeToServer = async (code) => {
    try {
      const response = await fetch(
        `http://localhost:4000/auth/kakao_login?code=${code}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("서버로부터 응답을 받는데 실패했습니다.");
      }

      const data = await response.json();
      console.log(data);

      navigate("/home"); // 응답 성공 후 /home으로 리디렉션
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container>
      <Position>
        <img className="tooltip" alt="tool_tip" src="/image/tooltip.svg" />
        <button className="button-img" onClick={kakakologinHandler}>
          <img className="imglogin" alt="kakao" src="/image/kakao-button.svg" />
        </button>

        <button className="button-img">
          <img
            className="imglogin"
            alt="google"
            src="/image/google-button.svg"
          />
        </button>
        <div className="marginbottom"> </div>
      </Position>
    </Container>
  );
}

export default Login;
