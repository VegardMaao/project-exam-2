import styled from "styled-components";
import { theme } from "../../theme";

export const SearchBarWrapper = styled.div`
  margin: 3rem auto;
  border: 2px solid ${theme.color.blue};
  border-radius: 25px;
  padding: 10px;
  width: 200px;

  i {
    font-size: 1.1rem;
    padding-right: 5px;
    margin-right: 5px;
  }
`;

export const SearchBarLabel = styled.label``;

export const SearchBarInput = styled.input`
  border: 0px;
  padding: 0px;
  margin: 0px;
  outline: none;
  font-size: 1rem;
  max-width: 80%;

  &:focus {
    border: 0px;
    padding: 0px;
    margin: 0px;
    outline: none;
  }
`;
