// @ts-ignore
import { singleVenueStyles as S } from "../../../styles/index.js";

export function DisplaySingleVenue(venueInfo : any) {
    console.log(venueInfo);
    
    if (venueInfo.venueInfo.name) {
        const{ description, location, maxGuests, name, media, meta, price, _count, rating, created, updated} = venueInfo.venueInfo || {};
        console.log(description, location, maxGuests, name, media, meta, price, _count, rating, created, updated );

        console.log(media[0].url);
        

        return <S.SingleVenueWrapper>
            <S.SingleVenueImage src={media[0].url}/>
            <S.SingleVenueHeading>{name}</S.SingleVenueHeading>
            <S.SingleVenueParagraph>{description}</S.SingleVenueParagraph>
            <S.SingleVenueParagraph>{`Costs ${price} dollars per night, rated ${rating} of 5. There have been ${_count.bookings} bookings of this venue so far.`}</S.SingleVenueParagraph>
        </S.SingleVenueWrapper>
    }
}