import styled from "styled-components";
import { ButtonComponent } from "./buttons.styles";
import { theme } from "../../theme";

export const DeleteButton = styled(ButtonComponent)`
  color: ${theme.color.black};
  background: red;

  &:hover {
    background: ${theme.color.black};
    color: red;
  }
`;
