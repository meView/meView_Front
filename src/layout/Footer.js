import styled from "styled-components";
import { Link } from "react-router-dom";

// Footer 컴포넌트 스타일 정의
const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: -0.2px;
  background-color: aqua;
  height: 50px;
`;

// FooterContent 컴포넌트 스타일 정의
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 40px;
  background-color: aqua;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <Link to="/testcode">TestCode</Link>
        <Link to="/testcode2">TestCode2</Link>
        <Link to="/about">About</Link>
      </FooterContent>
    </StyledFooter>
  );
}

export default Footer;
