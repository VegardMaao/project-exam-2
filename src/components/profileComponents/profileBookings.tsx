/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { ProfileElem as S } from "../../styles";
import { profilesUrl } from "../../environment";
import useLoggedInStore from "../../zustandStores/loggedInStore";
import { useGetAPI } from "../../api";
//@ts-ignore
import { loadingStyles } from "../../styles";
import { ExistingBooking } from "../interfaces/bookingInterFace";
import { useLocation } from "react-router-dom";

export function UserBookings() {
  const { getName } = useLoggedInStore();
  const name = getName();
  const location = useLocation();
  const url = `${profilesUrl}/${name}/bookings?_venue=true&_customer=true`;
  const { data, isLoading, isError } = useGetAPI(url);

  const formatDate = (string: string) => {
    return string.substring(0, 10).split("-").reverse().join(".");
  };

  if (isLoading) {
    return <loadingStyles.Loader />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (
    !location.pathname.includes(`${name}`) &&
    location.pathname !== "/profile/"
  ) {
    return <></>;
  }

  return (
    <S.VenuesAndBookingsWrapper>
      <S.VenuesBookingHeader>Your bookings</S.VenuesBookingHeader>
      <S.VenuesAndBookingsList>
        {data.map((booking: ExistingBooking) => (
          <li key={booking.id}>
            <S.VenuesAndBookingsLink to={`/venues/${booking.venue.id}`}>
              <S.VenuesAndBookingsImg
                src={
                  booking.venue.media.length ? booking.venue.media[0].url : ""
                }
                alt={
                  booking.venue.media.length ? booking.venue.media[0].alt : ""
                }
              />
              <S.VenueAndBookingName>
                {booking.venue.name}
              </S.VenueAndBookingName>

              <S.VenueAndBookingDetails>
                {`Booked from the ${formatDate(
                  booking.dateFrom
                )}, to the ${formatDate(booking.dateTo)}`}
              </S.VenueAndBookingDetails>
            </S.VenuesAndBookingsLink>
          </li>
        ))}
      </S.VenuesAndBookingsList>
    </S.VenuesAndBookingsWrapper>
  );
}
