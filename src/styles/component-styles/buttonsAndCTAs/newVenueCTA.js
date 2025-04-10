import styled from "styled-components";
import { device } from "../../BreakPoints";
import { ButtonComponent } from "./buttons.styles";

export const NewVenueBtn = styled(ButtonComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 1vh;
  left: 92vw;

  .fa-plus {
    font-size: 1.5rem;
    transition: all 200ms ease-in-out;
    transform: rotate(${(rotation) => rotation.rotation}deg);
  }

  @media (${device.sm}) {
    bottom: 2vh;
    left: 85vw;
  }
`;
