import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
`;
const NotificationContainer = styled.div`
  background-color: var(--Gray-14);
  color: white;
  padding: 0 16px 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .pin {
    font-size: 24px;
    padding: 8px 0 0;
  }
`;

const MainMessage = styled.p`
  flex: 1;
  padding: 12px 0 0;
  font-weight: bold;
`;

const SubMessage = styled.p`
  color: var(--Gray-07);
`;

const InformCardBottom = ({ mainMessage, subMessage }) => {
  return (
    <Container>
      <NotificationContainer>
        <MessageContainer>
          <MainMessage>{mainMessage}</MainMessage>
          <span className="pin">📌</span>
        </MessageContainer>
        <SubMessage>{subMessage}</SubMessage>
      </NotificationContainer>
    </Container>
  );
};

export default InformCardBottom;
