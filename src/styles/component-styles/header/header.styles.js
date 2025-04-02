import styled from "styled-components";
import { theme } from "../../theme";
import { device } from "../../BreakPoints";
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3 rem;
  position: relative;
  background: ${theme.color.offwhite};

  .logoWrapper {
    height: 60px;
    align-self: start;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .active {
    background: ${theme.color.blue};
    color: ${theme.color.orange};
  }

  .inactive {
    background: ${theme.color.offwhite};
    color: ${theme.color.blue};
  }

  @media (${device.sm}) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const NavLinkWrapper = styled.div`
  transition: 0.5s;
  margin-left: auto;
  @media (${device.sm}) {
    position: fixed;
    top: ${(props) => (props.showOnMobile ? "0px" : "-100vh")};
    background: ${theme.color.offwhite};
    text-align: center;
    padding: 2rem 100vw;

    @media (${device.sm}) {
      display: flex;
      flex-direction: column;
      height: 80vh;
      justify-content: space-evenly;
      margin-left: none;
      background: ${theme.color.orange};
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  transition: 0.3s;
  text-decoration: none;
  color: ${theme.color.blue};
  margin-left: 2rem;
  padding: 10px;
  border-radius: 15px;
  &: last-child {
    margin-right: 20px;
    margin-bottom: 0px;
  }

  &: hover {
    background: ${theme.color.blue};
    color: ${theme.color.orange};
  }

  @media (${device.sm}) {
    font-size: 1.3rem;
    display: block;
    margin: 2rem auto;
    color: ${theme.color.blue};
  }
`;

export const StyledLogo = styled.img`
  position: relative;
  z-index: 100;
  height: calc(100% - 10px);
  background: ${theme.color.orange};
  border: 2px solid ${theme.color.black};
  border-radius: 15px;
  left: 10px;

  @media (${device.sm}) {
    left: 0px;
  }
`;

export const StyledHamburgerIcon = styled.div`
  z-index: 100;
  display: none;
  position: absolute;
  right: 20px;
  top: 30px;

  i {
    font-size: 2.4rem;
  }

  @media (${device.sm}) {
    display: block;
  }
`;
