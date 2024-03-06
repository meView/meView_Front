import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { useRecoilValue } from "recoil";
import { mainpageState } from "recoil/MainpageAtom";
import Login from "../../components/main/Login";
import ArrowContainer from "components/main/ArrowContainer";
import PageDot from "components/main/PageDot";

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  height: 101vh;
  display: ${(props) => (props.$isLoading ? "none" : "block")};
  background-color: ${(props) =>
    props.$currentPage === 1 ? "var(--mainpg)" : "transparent"};
`;

const BackGround = styled.div`
  width: 100%;
  max-width: 500px;
  height: var(--vh);
  position: relative;
  overflow: hidden;

  .background {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 0;
    top: 0;
    left: 0;
    object-fit: cover;
    animation: ${(props) =>
      props.direction === "left"
        ? css`
            ${slideInLeft} 0.5s ease-out
          `
        : props.direction === "right"
        ? css`
            ${slideInRight} 0.5s ease-out
          `
        : css`
              none
            `};
  }
`;

function Mainpage() {
  const currentPage = useRecoilValue(mainpageState);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState("none");
  const prevPageRef = useRef(currentPage);
  const [key, setKey] = useState(new Date().getTime()); // 키 상태 추가

  useEffect(() => {
    if (prevPageRef.current < currentPage) {
      setDirection("right");
    }
    if (prevPageRef.current > currentPage) {
      setDirection("left");
    }

    prevPageRef.current = currentPage;
    setKey(new Date().getTime());
  }, [currentPage]);

  const imagePaths = [
    "./image/main-1.svg",
    "./image/main-2.svg",
    "./image/main-3.svg",
    "./image/main-4.svg",
  ];

  useEffect(() => {
    const loadImages = async () => {
      const promises = imagePaths.map((path) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = path;
          img.onload = () => resolve(path);
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };
    document.body.style.overflow = 'hidden';

    loadImages();
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  const backgroundImage = `./image/main-${currentPage}.svg`;

  return (
    <Container $isLoading={isLoading} $currentPage={currentPage}>
      {!isLoading && (
        <>
          <BackGround direction={direction} key={key}>
            <object
              data={backgroundImage}
              className="background"
              aria-label="main-background"
            ></object>
          </BackGround>
          <ArrowContainer />
          <PageDot currentPage={currentPage} />
          <Login />
        </>
      )}
    </Container>
  );
}

export default Mainpage;
