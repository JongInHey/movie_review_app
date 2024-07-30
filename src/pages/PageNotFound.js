import styled from "styled-components";
import { PageTitle } from "../components/PageTitle";
import { colors } from "../GlobalStyled";
import { Link } from "react-router-dom";
import { MdError } from "react-icons/md";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 72px;
    position: relative;
    top: 75px;
    left: -100px;
    color: ${colors.point};
  }
  h1 {
    font-size: 72px;
    margin-bottom: 16px;
  }

  p {
    font-size: 24px;
    margin-bottom: 24px;
  }

  a {
    padding: 12px 24px;
    font-size: 18px;
    background-color: ${colors.point};
    text-decoration: none;
    border-radius: 8px;
    transition: 0.3s ease;

    &:hover {
      background-color: lightgreen;
      color: #222;
    }
  }
`;

export const PageNotFound = () => {
  return (
    <>
      <PageTitle titleName={"404Page"} />
      <Container>
        <MdError />
        <h1>404</h1>
        <p>NotFoundPage</p>
        <p>페이지를 찾을 수 없습니다.</p>
        <Link to="/">Home으로 돌아가기</Link>
      </Container>
    </>
  );
};
