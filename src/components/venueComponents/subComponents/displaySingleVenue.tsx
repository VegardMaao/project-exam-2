// @ts-ignore
import { buttons, singleVenueStyles as S } from "../../../styles/index.js";
import { SetAmenities } from "./minorComponents/setAmenities.js";

export function DisplaySingleVenue(venueInfo : any) {

    if (venueInfo.venueInfo.name) {
        const{ description, location, maxGuests, name, media, meta, price, _count, rating, created, updated} = venueInfo.venueInfo || {};
        console.log(location);
        
        return <S.SingleVenueWrapper>
            <S.SingleVenueImage src={media[0] ? media[0].url : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} alt={media[0] ? media[0].alt : ""} />
            <S.SingleVenueHeading>{name}</S.SingleVenueHeading>
            {/* <S.SingleVenueParagraph>Located in {location.country}</S.SingleVenueParagraph> */}
            <S.SingleVenueParagraph>{description}</S.SingleVenueParagraph>
            <S.SingleVenueParagraph>{`Costs ${price} dollars per night, rated ${rating} of 5. There have been ${_count.bookings} bookings of this venue so far.`}</S.SingleVenueParagraph>
            <buttons.ButtonComponent colors="primary" size="big">Book this venue</buttons.ButtonComponent>

            <S.MoreInfoDiv>
                <S.SingleVenueH2>More about this Venue:</S.SingleVenueH2>
                <SetAmenities params={meta}/>
                <S.AmenitiesDiv>
                    <S.AmenitiesItem props="underline">About the Venue:</S.AmenitiesItem>
                    <S.AmenitiesItem>{`Max ${maxGuests} guests`}</S.AmenitiesItem>
                    <S.AmenitiesItem>{`This venue was first established ${created.substring(0,10).split("-").reverse().join(".")}, last updated ${updated.substring(0,10).split("-").reverse().join(".")}`}</S.AmenitiesItem>
                </S.AmenitiesDiv>
            </S.MoreInfoDiv>
        </S.SingleVenueWrapper>
    }
}
