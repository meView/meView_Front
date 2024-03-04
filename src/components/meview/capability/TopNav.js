import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;

  .top-margin {
    margin-top: 40px;
  }
  .bottom-margin {
    margin-bottom: 10px;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .button-icon {
    background: none;
    border: none;
    cursor: pointer;
    padding-top: 10px;
    position: relative;
  }
`;

const ButtonNav = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: var(--headline-06);
  font-weight: bold;
  width: 48px;
  height: 48px;
  position: relative;
  margin: 0 12px 0 0;

  color: ${({ $isactive }) => ($isactive ? "white" : "var(--Gray-11)")};

  .button-text {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .button-text::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ $isactive, $isHovered, $hoveredMenu }) =>
      $isactive && !$hoveredMenu
        ? "yellow"
        : $isHovered
        ? "yellow"
        : "var(--Gray-15)"};
    transition: ${({ $disableTransition }) =>
      $disableTransition ? "none" : "background-color 0.2s ease"};
  }
`;

function TopNav() {
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

  const handleNavigate = (path, menuName) => {
    navigate(path);
    setActiveMenu(menuName);
    setHoveredMenu("");
  };

  useEffect(() => {
    setActiveMenu(location.pathname.includes("meview") ? "meview" : "home");
    setDisableTransition(true);
    const timeoutId = setTimeout(() => setDisableTransition(false), 50);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <Container>
      <div className="top-margin"></div>
      <NavBar>
        <div>
          <ButtonNav
            onClick={() => handleNavigate("/home", "home")}
            onMouseEnter={() => setHoveredMenu("home")}
            onMouseLeave={() => setHoveredMenu(null)}
            $isactive={activeMenu === "home"}
            $isHovered={hoveredMenu === "home"}
            $hoveredMenu={hoveredMenu !== null}
            $disableTransition={disableTransition}
          >
            <p className="button-text">홈</p>
          </ButtonNav>
          <ButtonNav
            onClick={() => handleNavigate("/meview", "meview")}
            onMouseEnter={() => setHoveredMenu("meview")}
            onMouseLeave={() => setHoveredMenu(null)}
            $isactive={activeMenu === "meview"}
            $isHovered={hoveredMenu === "meview"}
            $hoveredMenu={hoveredMenu !== null}
            $disableTransition={disableTransition}
          >
            <p className="button-text">미뷰</p>
          </ButtonNav>
        </div>
        <button
          className="button-icon"
          onClick={() => handleNavigate("/mypage", "mypage")}
        >
          <img alt="mypage" src="/image/mypage-logo.svg" />
        </button>
      </NavBar>
    </Container>
  );
}

export default TopNav;
