import styled from "styled-components";
import { device } from "../../BreakPoints";
import { theme } from "../../theme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh;
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

export const ErrorMsg = styled.p``;
