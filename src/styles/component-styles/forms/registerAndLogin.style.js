import styled from "styled-components";
import { theme } from "../../theme";

export const flexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-width: 90vw;
  margin: auto;
`;

export const LoginRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 10vh auto;
  height: 45vh;
`;

export const FormLabel = styled.label`
  font-family: ${theme.fontFamily.headerFont};
  font-weight: 400;
  font-size: 1.2rem;
`;

export const FormInput = styled.input`
  border: 2px solid ${({ color }) => color};
  border-radius: 15px;
  padding: 0.7rem;

  &:focus {
    background: ${theme.color.orange};
    color: ${theme.color.blue};
  }
`;

export const ErrorMsg = styled.p`
  display: ${({ display }) => display};
  background: ${theme.color.orange};
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.4rem;
  border-radius: 10px;
  margin-top: 0px;
`;
