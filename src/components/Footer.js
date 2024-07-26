import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 100px;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Footer = () => {
  return <Container>&copy; 2024․ JongInHey. All rights reserved.</Container>;
};
