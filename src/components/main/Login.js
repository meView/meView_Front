import styled from "styled-components";

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
  const kakaolink = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
  const googlelink = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile`;

  const googleloginHandler = () => {
    window.location.href = googlelink;
  };

  const kakakologinHandler = () => {
    window.location.href = kakaolink;
  };

  return (
    <Container>
      <Position>
        <img className="tooltip" alt="tool_tip" src="/image/tooltip.svg" />
        <button className="button-img" onClick={kakakologinHandler}>
          <img className="imglogin" alt="kakao" src="/image/kakao-button.svg" />
        </button>

        <button className="button-img" onClick={googleloginHandler}>
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
