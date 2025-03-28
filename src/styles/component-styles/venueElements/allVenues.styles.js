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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 0.5rem;
  align-items: center;
  width: 70vw;
  max-width: 1100px;
  margin: auto;

  @media${device.sm} {
    width: 100vw;
  }
`;

export const VenueItem = styled.div`
    display: grid;
    border: 2px solid black;
    grid-template-rows: 3fr 1fr 5fr 1fr 1fr;
    width: 300px;
    height: 500px;
    margin: 20px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    justify-items: center;
}

    a{
    align-self: center;
    }
`;

export const Thumbnail = styled.img`
  max-width: 100%;
  max-height: 150px;
`;

export const VenueTitle = styled.h2`
  font-size: 1.3rem;
  word-wrap: break-word;
  max-width: 250px;
`;

export const VenueDescription = styled.p`
  max-width: 100%;
  max-height: 75%;
  overflow: hidden;
  text-align: center;
  word-wrap: break-word;
  text-decoration: ${({ props }) => props};
`;
