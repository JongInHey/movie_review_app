import styled from "styled-components";
import { colors } from "../../../GlobalStyled";

const ErM = styled.span`
  color: ${colors.point};
  margin-top: 10px;
  font-size: 18px;
`;

export const UserErrorMessage = ({ message }) => {
  return <ErM>{message}</ErM>;
};
