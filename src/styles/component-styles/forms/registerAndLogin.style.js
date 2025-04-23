import styled from "styled-components";
import { theme } from "../../theme";
import * as generic from "./genericFrom.style.js";

export const flexBox = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 90vw;
  margin: auto;
  padding-bottom: 30px;
`;

export const LoginRegisterForm = styled(generic.Form)`
  justify-content: space-around;
  height: 450px;
  margin: auto;
  margin-bottom: 25px;
`;

export const FormLabel = styled(generic.FormLabel)``;

export const FormInput = styled(generic.FormInput)``;

export const ErrorMsg = styled(generic.ErrorMsg)``;
