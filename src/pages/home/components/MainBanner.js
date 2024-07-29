import styled from "styled-components";
import { ORIGIN_URL } from "../../../constant/imgUrl";
import { spacing } from "../../../GlobalStyled";

const Container = styled.section`
  height: 80vh;
  background: url(${ORIGIN_URL}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  position: relative;
`;
const ConWrap = styled.div`
  position: absolute;
  bottom: 7%;
  left: 5%;
  h3 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative;
  }

  p {
    width: 600px;
    font-size: 20px;
    line-height: 30px;
    opacity: 0.7;
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    left: 0;
    bottom: 5%;
    padding: 0 ${spacing.moSide};

    h3 {
      font-size: 40px;
      margin-bottom: 15px;
    }

    p {
      max-width: 500px;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.65) 55%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const MainBanner = ({ bannerData }) => {
  return (
    <Container $bgUrl={bannerData.backdrop_path}>
      <BlackBg />
      <ConWrap>
        <h3>{bannerData.title}</h3>
        <p>{bannerData.overview.slice(0, 100) + "..."}</p>
      </ConWrap>
    </Container>
  );
};
