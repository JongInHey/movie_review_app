import styled from "styled-components";
import { colors } from "../../../GlobalStyled";

export const Container = styled.div`
  max-width: 400px;
  height: 600px;
  margin: 150px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
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
    top: -25px;
    left: -48%;
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
`;

export const TextWrap = styled.div`
  margin-top: 40px;
  text-align: center;
  a {
    color: ${colors.point};
    text-decoration: underline;
    margin-left: 10px;
  }
`;
