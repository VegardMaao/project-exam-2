import styled from "styled-components";
import { device } from "../../BreakPoints";

export const VenuesWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AllVenuesDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: .5rem;
    align-items: start;
    width: 70vw;
    margin: 0px;
`;

export const VenueItem = styled.div`
    display: flex;
    border: 2px solid black;
    width: 300px;
    height: 400px;
    margin: 20px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
    align-self: center;
    }
`;

export const Thumbnail = styled.img`
  max-height: 100px;
  max-width: 100px; 
`;

export const VenueTitle = styled.h2`
    font-size: 1.3rem;
    overflow: hidden;
    max-width: 75%;
`;

export const VenueDescription = styled.p`
    max-width: 75%;
    max-height: 50px;
    overflow: hidden;
`;