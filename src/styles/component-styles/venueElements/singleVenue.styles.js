import styled from "styled-components";

export const SingleVenueWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SingleVenueImage = styled.img`
    max-height: 60vh;
    max-width: 100vw;
    margin: auto;
        
`;

export const SingleVenueHeading = styled.h1`
    max-width: 75vw;
    margin: auto;
    word-wrap: break-word;
`;

export const SingleVenueH2 = styled.h2`
    max-width: 75vw;
    margin: 15px auto;
    text-decoration: underline;
`;

export const SingleVenueParagraph = styled.p`
    max-width: 75vw;
    text-align: center;
    margin: 15px auto;
`;

export const MoreInfoDiv = styled.div`
    display: flex;
    width: 75vw;
    flex-direction: column;
`;

export const AmenitiesDiv = styled.div`
    
`;

export const AmenitiesItem = styled.p`
    margin: 10px;
    text-decoration: ${({ props }) => props}
`;