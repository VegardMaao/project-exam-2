/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { loadingStyles, ProfileElem as S } from "../../styles";
import { useGetAPI } from "../../api";
import { Venue } from "../interfaces/venues";
import useLoggedInStore from "../../zustandStores/loggedInStore";
import { useLocation } from "react-router-dom";

interface VenueManagerInterFace {
  managerBool: boolean;
  url: string;
}

export function VenueManager(params: VenueManagerInterFace) {
  const { managerBool, url } = params;
  const { data, isLoading, isError } = useGetAPI(url);
  const { getName } = useLoggedInStore();
  const name = getName();
  const location = useLocation();
  const myUserBool = () => {
    if (
      location.pathname === "/profile" ||
      location.pathname.includes(`${name}`)
    ) {
      return true;
    } else {
      return false;
    }
  };

  if (managerBool) {
    if (isLoading) {
      return <loadingStyles.Loader />;
    }

    const stringBool = managerBool.toString();

    localStorage.setItem("venueManager", stringBool);

    if (isError) {
      return <div>Error loading data</div>;
    }

    return (
      <S.VenuesAndBookingsWrapper>
        <S.VenuesBookingHeader>
          {myUserBool() ? "Your venues" : "User hosts these venues"}
        </S.VenuesBookingHeader>
        <S.VenuesAndBookingsList>
          {data.map((venue: Venue) => (
            <li key={venue.id}>
              <S.VenuesAndBookingsLink to={`/venues/${venue.id}`}>
                <S.VenuesAndBookingsImg
                  src={
                    venue.media.length
                      ? venue.media[0].url
                      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                  }
                  alt={
                    venue.media.length
                      ? venue.media[0].alt
                      : "No available image"
                  }
                />
                <S.VenueAndBookingName>{venue.name}</S.VenueAndBookingName>
              </S.VenuesAndBookingsLink>
            </li>
          ))}
        </S.VenuesAndBookingsList>
      </S.VenuesAndBookingsWrapper>
    );
  } else {
    return (
      <S.VenuesAndBookingsWrapper>
        <S.VenuesBookingHeader>
          {myUserBool()
            ? "You do not host venues"
            : "User does not host venues"}
        </S.VenuesBookingHeader>
      </S.VenuesAndBookingsWrapper>
    );
  }
}
