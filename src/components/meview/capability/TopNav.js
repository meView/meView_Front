import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;

  .top-margin {
    margin-top: 40px;
  }
`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .button-nav {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: var(--headline-06);
    font-weight: bold;
    color: white;
    width: 48px;
    height: 48px;
    position: relative;
    margin: 0 12px 0 0;
  }

  .button-text {
    position: absolute;
    left: 0;
    bottom: 0;
    color: var(--Gray-11);
  }

  .button-text2 {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .button-text2::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--primary);
  }

  .button-icon {
    background: none;
    border: none;
    cursor: pointer;
    padding-top: 10px;
    position: relative;
  }
`;

function TopNav() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };
  const handleMeview = () => {
    navigate("/meview/strength");
  }
  const handleMypage = () => {
    navigate("/mypage");
  };

  return (
    <Container>
      <div className="top-margin"></div>
      <NavBar>
        <div>
          <button className="button-nav" onClick={handleHome}>
            <p className="button-text">홈</p>
          </button>
          <button className="button-nav" onClick={handleMeview}>
            <p className="button-text2">미뷰</p>
          </button>
        </div>

        <button className="button-icon" onClick={handleMypage}>
          <img alt="mypage" src="/image/mypage-logo.svg" />
        </button>
      </NavBar>
    </Container>
  );
}

export default TopNav;
