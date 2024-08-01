import styled from "styled-components";
import { PageTitle } from "../components/PageTitle";
import { colors } from "../GlobalStyled";
import { Link } from "react-router-dom";
import { MdError } from "react-icons/md";
import { useScrollTop } from "../lib/useScrollTop";

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
    background: linear-gradient(135deg, ${colors.point}, ${colors.gradient});
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    border-radius: 10px;
    transition: 0.3s ease;
    margin-bottom: 10px;

    &:hover {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(1px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const PageNotFound = () => {
  useScrollTop();
  return (
    <>
      <PageTitle titleName={"없습니다!"} />
      <Container>
        <MdError />
        <h1>404</h1>
        <p>NotFoundPage</p>
        <p>페이지를 찾을 수 없습니다.</p>
        <Link to="/">Home으로 돌아가기</Link>
        <Link to="/search">검색창으로 돌아가기</Link>
      </Container>
    </>
  );
};
