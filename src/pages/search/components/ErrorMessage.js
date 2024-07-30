import styled from "styled-components";

const SErrorMessage = styled.h4`
  font-size: 18px;
  margin-top: 20px;
  color: lightgreen;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 13px;
  }
`;

export const ErrorMessage = ({ message }) => {
  return <SErrorMessage>{message}</SErrorMessage>;
};
