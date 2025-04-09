import styled from "styled-components";
import { device } from "../../BreakPoints";
import { theme } from "../../theme";
import { Link, NavLink } from "react-router-dom";

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

  @media (${device.sm}) {
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

export const EditProfileLink = styled(NavLink)`
  display: ${(display) => display.display};
`;

export const FlexBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;

  @media (${device.sm}) {
    display: flex;
    flex-direction: column;
  }
`;

export const VenuesAndBookingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VenuesBookingHeader = styled.h2`
  text-decoration: underline;
`;

export const VenuesAndBookingsList = styled.ul`
  margin: 0px;
  padding: 10px 0px;
  margin: auto;

  li {
    list-style: none;
    border: 2px solid black;
    margin: 10px auto;
    padding: 10px;
    border-radius: 15px;
  }
`;

export const VenuesAndBookingsImg = styled.img`
  max-width: 70%;
  max-height: 70%;
`;

export const VenuesAndBookingsLink = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 300px;
  margin: auto;

  @media (${device.sm}) {
    width: 70vw;
  }
`;

export const VenueAndBookingName = styled.h3`
  text-decoration: none;
  text-align: start;
  word-wrap: break-word;
  max-width: 100%;
`;

export const VenueAndBookingDetails = styled.p``;
