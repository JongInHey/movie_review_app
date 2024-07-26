import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors, spacing } from "../GlobalStyled";

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
`;

export const Header = () => {
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
    </Container>
  );
};
