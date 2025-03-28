import styled from "styled-components";
import { theme } from "../../theme";

export const Loader = styled.div`
  background-color: ${theme.color.blue};
  border: 15px solid ${theme.color.offwhite};
  border-top: 15px solid ${theme.color.orange};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  position: relative;
  transform: translateX(-50%);
  margin: auto;
  margin-top: 10rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
