import styled from "styled-components";
import * as generic from "./genericFrom.style.js";
import { theme } from "../../theme.ts";

export const Wrapper = styled.div`
  //   position: sticky;
  //   bottom: 10vh;
  position: relative;
  top: -100px;
`;

export const EditOrCancel = styled.form`
  position: relative;
  top: 70px;
  left: 10px;
`;

export const EditProfileForm = styled(generic.Form)`
  ${(display) => display};
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

  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EditProfileLabel = styled(generic.FormLabel)``;

export const EditProfileInput = styled(generic.FormInput)``;

export const ErrorMsg = styled(generic.ErrorMsg)``;

export const EditProfileTextArea = styled(generic.TextArea)``;
