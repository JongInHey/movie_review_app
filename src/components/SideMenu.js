import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { routes } from "../routes";
import { colors } from "../GlobalStyled";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const SSideMenu = styled.div`
  width: 50%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  transition: 0.3s;

  @media screen and (max-width: 768px) {
    background-color: #252525;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    z-index: 98;
    display: ${(props) => (props.$show ? "block" : "none")};
    animation: ${(props) => (props.$show ? slideIn : slideOut)} 0.3s forwards;
    ul {
      padding: 70px 30px;
      font-size: 20px;
      font-weight: 700;
      li {
        margin-bottom: 20px;
        a {
          color: ${colors.point};
        }
      }
    }

    @media screen and (max-width: 768px) {
      ul {
        font-size: 18px;
      }
    }
  }
`;

export const SideMenu = ({ show, moreHandler, isLogged, onLogout }) => {
  const handleLogout = () => {
    moreHandler();
    onLogout();
  };
  return (
    <SSideMenu $show={show}>
      <ul>
        <li>
          <Link to={routes.home} onClick={moreHandler}>
            HOME
          </Link>
        </li>
        <li>
          <Link to={routes.search} onClick={moreHandler}>
            SEARCH
          </Link>
        </li>
        {isLogged ? (
          <li>
            <Link to={routes.home} onClick={handleLogout}>
              LOGOUT
            </Link>
          </li>
        ) : (
          <li>
            <Link to={routes.login} onClick={moreHandler}>
              LOGIN
            </Link>
          </li>
        )}
      </ul>
    </SSideMenu>
  );
};
