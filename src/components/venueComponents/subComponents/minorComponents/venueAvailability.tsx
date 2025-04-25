/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
//@ts-ignore
import { singleVenueStyles as S } from "../../../../styles/index.js";
import { formatDate } from "../../../../helper/formatDate.js";

type Booking = {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
  customer: {
    name: string;
    email: string;
    bio: string;
    avatar: {
      url: string;
      alt: string;
    };
    banner: {
      url: string;
      alt: string;
    };
  };
};

export function VenueAvailability(params: any) {
  const { bookings, checker } = params;

  if (!bookings.length) {
    return (
      <S.CurrentBookingsWrapper>
        <h2>No current bookings</h2>
      </S.CurrentBookingsWrapper>
    );
  } else {
    return (
      <S.CurrentBookingsWrapper>
        <h2>Currently Booked:</h2>
        <S.CurrentBookingsList>
          {bookings.map((booking: Booking) => (
            <li key={booking.id}>
              {`${
                checker ? `By ${booking.customer.name}` : ``
              } From the ${formatDate(booking.dateFrom)} to the ${formatDate(
                booking.dateTo
              )}`}
            </li>
          ))}
        </S.CurrentBookingsList>
      </S.CurrentBookingsWrapper>
    );
  }
}
