/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
//@ts-ignore
import { singleVenueStyles as S } from "../../../../styles/index.js";

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
  const { bookings } = params;
  console.log(bookings);

  return (
    <S.CurrentBookingsWrapper>
      <h2>Currently Booked:</h2>
      <S.CurrentBookingsList>
        {bookings.map((booking: Booking) => (
          <li key={booking.id}>
            {`From the ${booking.dateFrom
              .substring(0, 10)
              .split("-")
              .reverse()
              .join(".")} to the ${booking.dateTo
              .substring(0, 10)
              .split("-")
              .reverse()
              .join(".")}`}
          </li>
        ))}
      </S.CurrentBookingsList>
    </S.CurrentBookingsWrapper>
  );
}
