import styled from "styled-components";
import { colors } from "../../../GlobalStyled";

const ErM = styled.span`
  color: ${colors.point};
  margin-top: 10px;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 5px;
  }
`;

export const UserErrorMessage = ({ message }) => {
  return <ErM>{message}</ErM>;
};
