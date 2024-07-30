import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { ORIGIN_URL } from "../../../constant/imgUrl";

export const Container = styled.section`
  padding: 100px 20%;
  display: flex;

  @media screen and (max-width: 1548px) {
    padding: 100px 10%;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    padding: 100px 0 100px ${spacing.side};
  }

  @media screen and (max-width: 768px) {
    padding: 100px ${spacing.moSide} 0 ${spacing.moSide};
    display: block;
    text-align: center;
  }
`;

export const CoverImg = styled.img`
  width: 45%;
  border-radius: 10px;
  margin-right: 5%;
  object-fit: cover;
  z-index: 98;

  @media screen and (max-width: 1548px) {
    width: 43%;
    margin-right: 3%;
  }

  @media screen and (max-width: 1024px) {
    width: 45%;
    height: 650px;
    margin-right: 3%;
  }

  @media screen and (max-width: 768px) {
    max-width: 225px;
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    position: relative;
    z-index: 98;
  }
`;

export const ConWrap = styled.div`
  width: 47%;
  padding: 0 20px;
  z-index: 98;
  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1548px) {
    h3 {
      font-size: 60px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    h3 {
      font-size: 50px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    h3 {
      font-size: 37px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  z-index: 98;
  span {
    display: block;
    padding: 10px 20px;
    background-color: #333;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    margin-right: 15px;
  }

  @media screen and (max-width: 1548px) {
    span {
      padding: 7px 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    span {
      padding: 10px 15px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 15%;
    left: 70%;
    span {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
`;

export const Genres = styled.ul`
  list-style: square;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
  opacity: 0.8;
  li {
    margin-top: 10px;
  }

  @media screen and (max-width: 1024px) {
    padding: 10px 20px 30px 20px;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
    position: absolute;
    top: 32%;
    left: 70%;
    z-index: 98;
    list-style: none;
    margin-left: 0;
    li {
      background-color: #333;
      border-radius: 20px;
      margin: 5px 10px;
      font-size: 14px;
      padding: 5px 10px;
    }
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.7;
  margin-top: 50px;
  line-height: 30px;

  @media screen and (max-width: 1548px) {
    margin-top: 75px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin-top: 25px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 0 auto;
    line-height: 25px;
  }
`;

export const BgImg = styled.div`
  position: absolute;
  top: 11%;
  left: 0;
  z-index: 90;
  width: 100%;
  height: 83vh;
  background: url(${ORIGIN_URL}${(props) => props.$bgimg}) no-repeat center /
    cover;
  opacity: 0.5;
  filter: blur(30px);

  @media screen and (max-width: 768px) {
    height: 380px;
  }
`;
