/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { Link } from "react-router-dom";
//@ts-ignore
import { singleVenueStyles as S } from "../../../styles/index.js";
import { BookingForm } from "../../forms/bookVenueForm.tsx";
import { SetAmenities } from "./minorComponents/setAmenities.tsx";
import { VenueAvailability } from "./minorComponents/venueAvailability.tsx";
import useLoggedInStore from "../../../zustandStores/loggedInStore.ts";
import Carousel from "./carousel.tsx";

function checkUser(name1: string, name2: string) {
  if (name1 === name2) {
    return true;
  } else {
    return false;
  }
}

export function DisplaySingleVenue(venueInfo: any) {
  const { getName } = useLoggedInStore();
  const myUserName = getName();
  if (venueInfo.venueInfo.name) {
    const {
      description,
      id,
      location,
      maxGuests,
      name,
      media,
      meta,
      price,
      _count,
      rating,
      created,
      updated,
      owner,
      bookings,
    } = venueInfo.venueInfo || {};

    const checker = checkUser(`${myUserName}`, `${owner.name}`);

    return (
      <S.SingleVenueWrapper>
        {/* <S.ImageWrapper>
          {media.map((item: any) => (
            <S.SingleVenueImage key={item.url} src={item.url} />
          ))}
        </S.ImageWrapper> */}
        <Carousel media={media} />

        <S.SingleVenueHeading>{name}</S.SingleVenueHeading>
        <Link to={`/profile/${owner.name}`}>
          {checker ? "You are hosting this venue" : `By ${owner.name}`}
        </Link>
        <S.SingleVenueParagraph>{description}</S.SingleVenueParagraph>
        <S.SingleVenueParagraph>{`Costs ${price} dollars per night, rated ${rating} of 5. There have been ${_count.bookings} bookings of this venue so far.`}</S.SingleVenueParagraph>
        <S.BookingWrapper>
          <BookingForm guests={maxGuests} id={id} />
          <VenueAvailability bookings={bookings} />
        </S.BookingWrapper>
        <div>
          <S.SingleVenueH2>More about this Venue:</S.SingleVenueH2>
          <S.MoreInfoDiv>
            <SetAmenities params={meta} />
            <S.AmenitiesDiv>
              <S.AmenitiesItem props="underline">
                About the Venue:
              </S.AmenitiesItem>
              <S.AmenitiesItem>{`${
                location
                  ? `Located in ${location.country}`
                  : `Unspecified location`
              }`}</S.AmenitiesItem>
              <S.AmenitiesItem>{`Max ${maxGuests} guests`}</S.AmenitiesItem>
              <S.AmenitiesItem>{`This venue was established ${created
                .substring(0, 10)
                .split("-")
                .reverse()
                .join(".")}, last updated ${updated
                .substring(0, 10)
                .split("-")
                .reverse()
                .join(".")}`}</S.AmenitiesItem>
            </S.AmenitiesDiv>
          </S.MoreInfoDiv>
        </div>
      </S.SingleVenueWrapper>
    );
  }
}
