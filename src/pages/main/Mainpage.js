import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { mainpageState } from "recoil/MainpageAtom";
import Login from "../../components/main/Login";
import ArrowContainer from "components/main/ArrowContainer";

const Container = styled.div`
  height: var(--vh);
  display: ${(props) => (props.$isLoading ? "none" : "block")};
`;

const BackGround = styled.div`
  width: 100%;
  max-width: 500px;
  height: var(--vh);
  position: relative;
  overflow: hidden;

  .background {
    position: absolute;
    min-width: 100%;
    min-height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
`;

function Mainpage() {
  const currentPage = useRecoilValue(mainpageState);
  const [isLoading, setIsLoading] = useState(true);
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

    loadImages();
  }, []);

  const backgroundImage = `./image/main-${currentPage}.svg`;

  return (
    <Container $isLoading={isLoading}>
      {!isLoading && (
        <>
          <BackGround>
            <object
              type="image/svg+xml"
              data={backgroundImage}
              className="background"
              aria-label="main-background"
            ></object>
          </BackGround>
          <ArrowContainer />
          <Login />
        </>
      )}
    </Container>
  );
}
export default Mainpage;
