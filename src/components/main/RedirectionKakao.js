import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAccessTokenState, userInfoState } from "recoil/UserAtom";

const RedirectionKakao = () => {
  const code = window.location.search;
  const navigate = useNavigate();
  const [, setUserAccessToken] = useRecoilState(userAccessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    const baseUrl = "http://meview.store";
    const url = `${baseUrl}/auth/kakao_login${code}`;

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

  return <div>로그인 중입니다.</div>;
};

export default RedirectionKakao;
