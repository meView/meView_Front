import React from "react";
import { Mobile, PC } from "./MediaQuery";
import styled from "styled-components";
import BodyContent from "./BodyContent";

const PcView = styled.div`
  height: 100vh;
  width: 500px;
  margin: 0 auto;
`;

const MobileView = styled.div`
  margin: 0 auto;
`;

function App() {
  return (
    <>
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
