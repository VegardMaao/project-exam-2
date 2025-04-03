/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { headerStyles } from "../../styles/index.js";
import logo from "../../assets/logo.svg";

export const Logo = () => {
  return <headerStyles.StyledLogo src={logo} alt="logo" />;
};
