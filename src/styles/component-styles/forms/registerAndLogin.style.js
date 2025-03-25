import styled from "styled-components";
import { device } from "../../BreakPoints";
import { theme } from "../../theme";

export const LoginRegisterForm = styled.form`
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 30vh;
`;

export const FormLabel = styled.label`
    font-family: ${theme.fontFamily.headerFont};
    font-weight: 400;
    font-size: 1.2rem;
`;

export const FormInput = styled.input`
    border: 2px solid ${({color}) => color};
    border-radius: 15px;
    padding: 0.7rem;

    &:focus{
    background: ${theme.color.blue};
    color: ${theme.color.offwhite}
    }
`;

export const ErrorMsg = styled.p`
    display: ${({display}) => display};
    background: ${theme.color.orange};
    font-size: 0.9rem;
    font-weight: 400;
    padding: 0.4rem;
    border-radius: 10px;
    margin-top: 0px;
`;