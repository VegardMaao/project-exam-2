import styled from "styled-components";
import { theme } from "../../theme";
import {device} from "../../BreakPoints"
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3 rem;
    position: relative;
    background: ${theme.color.offwhite};

    .logoWrapper{
    height: 60px;
    align-self: start;
    margin: 0;
    }

    .active{
        background: ${theme.color.deepblue};
        color: ${theme.color.orange};
    }
        
    @media(${device.sm}){
    flex-direction: column;
    padding: 1rem;
    }

`;

export const NavLinkWrapper = styled.div`
    transition: 0.5s;
    margin-left: auto;
    @media(${device.sm}){
    position: fixed;
    top: ${(props) => props.showOnMobile ? "0px" : "-100vh"};
    background: ${theme.color.offwhite};
    text-align: center;
    padding: 2rem 100vw;

    
    
        @media(${device.sm}){
        display: flex;
        flex-direction: column;
        height: 60vh;
        justify-content: space-evenly;
        margin-left: none;
        }
    
    }
`;

export const StyledNavLink = styled(NavLink)`
    transition: 0.3s;
    text-decoration: none;
    color: ${theme.color.deepblue};
    margin-left: 2rem;
    padding: 10px;
    border-radius: 15px;
    &: last-child {
    margin-right: 20px;
    margin-bottom: 0px;
    }

    &: hover {
        background: ${theme.color.deepblue};
        color: ${theme.color.orange};
    }

    @media(${device.sm}){
    font-size: 1.3rem;
    display: block; 
    margin: 2rem auto;
    }
`;


export const StyledLogo = styled.img`
    position: relative;
    z-index: 100;
    width: 150px;
`;  

export const StyledHamburgerIcon = styled.div`
    z-index: 100;
    display: none;
    position: absolute;
    right: 20px;
    top: 30px;

    i{
        font-size: 2.4rem;
    }

    @media(${device.sm}){
    display: block;
    }
`;

export const CartIcon = styled(NavLink)`
    transition: 0.3s;
    z-index: 100;
    color: ${theme.color.deepblue};
    display: ${(props) => props.showCart ? "block" : "none"};
    margin-right: 20px;
    border-radius: 15px;
    
    i{
    font-size: 1.8rem;
    padding: 10px;
    color: inherit;
    }

    &: hover {
        background: ${theme.color.deepblue};
        color: ${theme.color.orange};
    }

    @media${device.sm}{
    position: absolute;
    right: 80px;
    top: 30px;
    }
`;