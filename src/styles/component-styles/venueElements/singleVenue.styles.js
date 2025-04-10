import styled from "styled-components";
import { device } from "../../BreakPoints";

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

export const BookingWrapper = styled.div`
  display: grid;
  width: 75vw;
  height: 65vh;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  justify-items: center;
  align-items: start;

  @media (${device.sm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;

export const MoreInfoDiv = styled.div`
  display: flex;
  width: 75vw;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const CurrentBookingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh;
  height: 40%;

  @media (${device.sm}) {
    height: 30vh;
  }
`;

export const CurrentBookingsList = styled.ul`
  padding: 10px;
  overflow-y: scroll;
  max-height: 100%;

  li {
    list-style: none;
    text-decoration: underline;
    padding: 10px;
  }
`;

export const AmenitiesDiv = styled.div`
  width: 350px;
`;

export const AmenitiesItem = styled.p`
  margin: 10px;
  text-decoration: ${({ props }) => props};
`;
