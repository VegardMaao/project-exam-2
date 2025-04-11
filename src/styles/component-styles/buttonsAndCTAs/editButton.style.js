import styled from "styled-components";
import { ButtonComponent } from "./buttons.styles";

export const EditButton = styled(ButtonComponent)`
  ${(display) => display};

  i {
    transform: rotate(45deg);
  }
`;
