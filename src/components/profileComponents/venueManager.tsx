/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { loadingStyles, ProfileElem as S } from "../../styles";
import { useGetAPI } from "../../api";
import { Venue } from "../interfaces/venues";
import { Link } from "react-router-dom";

interface VenueManagerInterFace {
  managerBool: boolean;
  url: string;
}

export function VenueManager(params: VenueManagerInterFace) {
  const { managerBool, url } = params;
  const { data, isLoading, isError } = useGetAPI(url);

  if (managerBool) {
    if (isLoading) {
      return <loadingStyles.Loader />;
    }

    if (isError) {
      return <div>Error loading data</div>;
    }
    return (
      <S.VenuesAndBookingsWrapper>
        <S.VenuesBookingHeader>User manages these venues</S.VenuesBookingHeader>
        <S.VenuesAndBookingsList>
          {data.map((venue: Venue) => (
            <li key={venue.id}>
              <Link to={`/venues/${venue.id}`}>
                <S.VenueAndBookingName>{venue.name}</S.VenueAndBookingName>
              </Link>
            </li>
          ))}
        </S.VenuesAndBookingsList>
      </S.VenuesAndBookingsWrapper>
    );
  } else {
    return (
      <S.VenuesAndBookingsWrapper>
        <S.VenuesBookingHeader>User does not host venues</S.VenuesBookingHeader>
      </S.VenuesAndBookingsWrapper>
    );
  }
}
