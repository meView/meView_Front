import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  .top-margin {
    margin-top: 24px;
  }
`;

const View = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin-top: 24px;

  border-bottom: 2px solid var(--Gray-14);
`;

const StyledP = styled.p`
  position: relative;
  padding: 14px;
  font-size: 18px;
  font-weight: bold;
  color: var(--Gray-11);
  cursor: pointer;
  margin: 0 37px;

  ${({ $active }) =>
    $active &&
    css`
      color: white;
      margin-bottom: -2px;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 32px;
        height: 2px;
        background-color: var(--primary);
        border-radius: 10px;
      }
    `}
`;

function ViewNav() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("skills");

  const handleNavigation = (path, menuName) => {
    navigate(path);
    setActiveMenu(menuName);
  };

  useEffect(() => {
    if (window.location.pathname.includes("projects")) {
      setActiveMenu("projects");
    }
  }, []);

  return (
    <Container>
      <View>
        <StyledP
          onClick={() =>
            handleNavigation("/meview/strength", "skills")
          }
          $active={activeMenu === "skills"}
        >
          역량으로 보기
        </StyledP>
        <StyledP
          onClick={() => handleNavigation("/meview/projects", "projects")}
          $active={activeMenu === "projects"}
        >
          프로젝트로 보기
        </StyledP>
      </View>
    </Container>
  );
}

export default ViewNav;
