import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors, spacing } from "../GlobalStyled";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { SideMenu } from "./SideMenu";

const Container = styled.header`
  width: 100%;
  padding: 20px ${spacing.side};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  @media screen and (max-width: 768px) {
    padding: 20px ${spacing.moSide};
  }
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }
`;

const Menu = styled.ul`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 100px;
    &:hover a {
      color: ${colors.point};
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
    li {
      margin-left: 50px;
    }
  }
`;

const More = styled.div`
  font-size: 26px;
  cursor: pointer;
  z-index: 99;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Header = () => {
  const [show, setShow] = useState(false);
  const moreHandler = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Logo>
        <Link to={routes.home}>JongFlix</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.home}>HOME</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
        <li>
          <Link to={routes.login}>Login</Link>
        </li>
      </Menu>

      <More onClick={moreHandler}>
        <GiHamburgerMenu />
      </More>

      <SideMenu show={show} moreHandler={moreHandler} />
    </Container>
  );
};
