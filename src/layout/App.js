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
  width: 500px;
  margin: 0 auto;
  background-color: var(--Gray-15);
  overflow-y: auto;
`;

const MobileView = styled.div`
  margin: 0 auto;
  background-color: var(--Gray-15);
  overflow-y: auto;
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
