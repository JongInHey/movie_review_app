import styled from "styled-components";
import { colors } from "../../../GlobalStyled";
import { LOGINBG_URL } from "../../../constant/imgUrl";

export const Container = styled.div`
  max-width: 400px;
  height: 600px;
  margin: 150px auto;
  position: relative;
  z-index: 98;
  @media screen and (max-width: 768px) {
    margin: 100px auto;
  }
`;

export const BackBg = styled.div`
  width: 500px;
  height: 630px;
  background: url(${LOGINBG_URL}) no-repeat center / cover;
  filter: blur(30px);
  position: absolute;
  left: -10%;
  top: -5%;
  z-index: 97;

  @media screen and (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 98;

  h3 {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -1.5px;
    margin-bottom: 30px;
  }

  input {
    all: unset;
    width: 100%;
    height: 45px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 15px 20px 5px 20px;
    box-sizing: border-box;
    margin-top: 10px;
    font-size: 20px;
    &::placeholder {
      font-size: 18px;
    }
  }

  svg {
    position: relative;
    z-index: 98;
    top: -25px;
    left: -48%;
  }

  @media screen and (max-width: 768px) {
    input {
      width: 80%;
      height: 45px;
      padding: 15px 20px 5px 20px;
      margin-top: 0;
      font-size: 15px;
      &::placeholder {
        font-size: 15px;
      }
    }
    svg {
      position: relative;
      z-index: 98;
      top: -25px;
      left: -38%;
    }
  }
`;

export const Button = styled.button`
  all: unset;
  width: 100%;
  height: 40px;
  background: linear-gradient(135deg, ${colors.point}, #ff9898);
  text-align: center;
  border-radius: 30px;
  margin-top: 20px;
  font-weight: 700;
  opacity: ${(props) => (props.$isBtnActive ? "1" : "0.4")};
  cursor: ${(props) => (props.$isBtnActive ? "pointer" : "default")};

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const TextWrap = styled.div`
  margin-top: 40px;
  text-align: center;
  position: relative;
  z-index: 98;
  a {
    color: ${colors.point};
    text-decoration: underline;
    margin-left: 10px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;
