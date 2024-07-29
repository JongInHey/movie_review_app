import styled from "styled-components";
import { ORIGIN_URL } from "../../../constant/imgUrl";

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
`;

export const MainBanner = ({ bannerData }) => {
  return (
    <Container $bgUrl={bannerData.backdrop_path}>
      <ConWrap>
        <h3>{bannerData.title}</h3>
        <p>{bannerData.overview.slice(0, 100) + "..."}</p>
      </ConWrap>
    </Container>
  );
};
