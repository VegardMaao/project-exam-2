import styled from "styled-components";
import { device } from "../../BreakPoints";
import { theme } from "../../theme";

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BannerImg = styled.div`
    background-image: url(${({ url }) => url});
    background-size: fill;
    background-position: center;
    background-repeat: no-repeat;
    height: 30vh;
    width: 100vw;
    margin: auto;
`;

export const AvatarImg = styled.img`
    border: 2px solid ${theme.color.black};
    max-height: 200px;
`;