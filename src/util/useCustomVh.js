// src/hooks/useCustomVh.js
import { useEffect } from "react";

const useCustomVh = () => {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight}px`
      );
    };

    window.addEventListener("resize", setVh);
    setVh(); // 초기 설정

    return () => {
      window.removeEventListener("resize", setVh); // 클린업 함수
    };
  }, []);
};

export default useCustomVh;
