import React from "react";
import { Mobile, PC } from "./MediaQuery";
import styled, { createGlobalStyle } from "styled-components";
import BodyContent from "./BodyContent";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #434343;   
  }
`;

const PcView = styled.div`
  width: 500px;
  margin: 0 auto;
  background-color: var(--Gray-15);
  min-height: 100vh;
`;

const setVh = () => {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
};
window.addEventListener("resize", setVh);
setVh();

const MobileView = styled.div`
  background-color: var(--Gray-15);
  margin: 0 auto;
  min-height: 100vh;
  min-height: var(--vh);
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <PC>
        <PcView>
          <BodyContent />
        </PcView>
      </PC>
      <Mobile>
        <MobileView>
          <BodyContent />
        </MobileView>
      </Mobile>
    </>
  );
}

export default App;
