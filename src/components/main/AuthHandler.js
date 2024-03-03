import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
  const code = window.location.search;
  const navigate = useNavigate();

  useEffect(() => {
    const baseUrl = "http://meview.store";
    const url = `${baseUrl}/auth/kakao_login${code}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);

        navigate("/home");
      })
      .catch((error) => {
        console.error("로그인 요청 에러:", error);
      });
  }, [navigate]);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
