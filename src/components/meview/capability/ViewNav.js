import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";


const Container = styled.div`
  margin-top: 24px;
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
  margin: 0 37px;
  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? "white" : "var(--Gray-11)")};

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    background-color: var(--primary);
    border-radius: 10px;
    width: ${({ $isActive, $isHovered, $hoveredMenu }) =>
      $isActive && !$hoveredMenu ? "32px" : $isHovered ? "32px" : "0"};
    transition: ${({ $disableTransition }) =>
      $disableTransition ? "none" : "width 0.2s ease"};
  }
`;

function ViewNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [disableTransition, setDisableTransition] = useState(true);

  useEffect(() => {
    setDisableTransition(true);
    const timeoutId = setTimeout(() => setDisableTransition(false), 50);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  const handleNavigation = (path, menuName) => {
    navigate(path);
    setActiveMenu(menuName);
    setHoveredMenu("");
  };

  useEffect(() => {
    setActiveMenu(
      location.pathname.includes("projects") ? "projects" : "skills"
    );
    setDisableTransition(true);
    const timeoutId = setTimeout(() => setDisableTransition(false), 50);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <Container>
      <View>
        <StyledP
          onClick={() => handleNavigation("/meview", "skills")}
          onMouseEnter={() => setHoveredMenu("skills")}
          onMouseLeave={() => setHoveredMenu(null)}
          $isActive={activeMenu === "skills"}
          $isHovered={hoveredMenu === "skills"}
          $hoveredMenu={hoveredMenu !== null}
          $disableTransition={disableTransition}
        >
          역량으로 보기
        </StyledP>
        <StyledP
          onClick={() => handleNavigation("/meview/projects", "projects")}
          onMouseEnter={() => setHoveredMenu("projects")}
          onMouseLeave={() => setHoveredMenu(null)}
          $isActive={activeMenu === "projects"}
          $isHovered={hoveredMenu === "projects"}
          $hoveredMenu={hoveredMenu !== null}
          $disableTransition={disableTransition}
        >
          프로젝트로 보기
        </StyledP>
      </View>
    </Container>
  );
}

export default ViewNav;
