import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAccessTokenState, userInfoState } from "recoil/UserAtom";


const RedirectionGoogle = () => {
  const code = window.location.search;
  const server_address = process.env.REACT_APP_SERVER_ADDRESS;
  const navigate = useNavigate();
  const [, setUserAccessToken] = useRecoilState(userAccessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  

  useEffect(() => {
    const url = `${server_address}/auth/google_login${code}`;

    axios
      .get(url)
      .then((response) => {
        setUserAccessToken(response.data.data["jwtToken"]);
        setUserInfo(response.data.data["user"]);
        navigate("/home");
      })
      .catch((error) => {
        console.error("로그인 요청 에러:", error);
      });
  }, [navigate]);

  return <div></div>;
}

export default RedirectionGoogle;
