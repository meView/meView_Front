import React from "react";
import { Mobile, PC } from "./MediaQuery";
import styled, { createGlobalStyle } from "styled-components";
import BodyContent from "./BodyContent";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #222222;
  }
`;

const PcView = styled.div`
  height: 100vh;
  width: 500px;
  margin: 0 auto;
  background-color: var(--Gray-15);
`;

const MobileView = styled.div`
  margin: 0 auto;
  background-color: var(--Gray-15);
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
