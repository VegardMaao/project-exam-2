import styled from "styled-components";
import * as generic from "./genericFrom.style.js";
import { theme } from "../../theme.ts";

export const NewVenueForm = styled(generic.Form)`
  ${(display) => display.display};
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 15px;
  background: ${theme.color.offwhite};
  width: 75vw;
  height: 70vh;
  margin: auto;
  border: 2px solid ${theme.color.black};
  border-radius: 15px;
  position: sticky;
  bottom: 10vh;
  overflow-y: scroll;

  -ms-overflow-style: none; 
  scrollbar-width: none; 

  &::-webkit-scrollbar { 
    display: none;
`;

export const NewVenueLabel = styled(generic.FormLabel)`
  font-size: 1 rem;
`;

export const NewVenueInput = styled(generic.FormInput)``;

export const ErrorMsg = styled(generic.ErrorMsg)``;

export const NewVenueTextArea = styled(generic.TextArea)``;
