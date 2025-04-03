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

export const AvatarAndSummaryWrapper = styled.div`
    display: flex;
    width: 75vw;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: -6rem;

    @media(${device.sm}){
        flex-direction: column;
    }
    `;

export const AvatarImg = styled.img`
    border: 2px solid ${theme.color.black};
    max-height: 200px;

`;

export const ProfileSummaryWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ProfileName = styled.h1`
    background: #fefefe4d;
    padding: 10px;
    border-radius: 15px;
`;

export const ProfileBio = styled.p`
    padding: 1rem;
    ${(display) => display};
`;

export const VenueManagerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const VenuesList = styled.ul`
    margin: 0px;
    padding: 10px 0px;

    li {
        list-style: none;
    }
`;

export const VenueName = styled.h3`
    text-decoration: none;
    text-align: start;
`;
