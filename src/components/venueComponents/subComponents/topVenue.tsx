import { useEffect, useState } from "react";
// @ts-ignore
import { sortByRating } from "../../sortArrays/sortArrays.js";
// @ts-ignore
import { buttons, topVenueStyles as S } from "../../../styles";
import { Link } from "react-router-dom";
import { Venue, VenuesArr } from "../../interfaces/venues.js";

export function SetTopVenue({data} : {data : VenuesArr}) {
    const [topVenue, SetTopVenue] = useState<Venue | undefined>(undefined);

    useEffect(() => {
        const sortVenueData = data.sort(sortByRating);
        SetTopVenue(sortVenueData[0]);
    }, []);

    if (topVenue) {
        const { id, name, description, media, maxGuests, price } = topVenue || {};
        return <S.TopVenueWrapper url={media[0].url} title={media[0].alt}>
        <Link to={`/venues/${id}`}>
        <S.TopVenueInfoDiv>
            <S.TopVenueHeader>{name}</S.TopVenueHeader>
            <S.TopVenueParagraph>{description}</S.TopVenueParagraph>
            <S.TopVenueParagraph>{`Up to ${maxGuests} guests, for ${price} dollars/night`}</S.TopVenueParagraph>
            <buttons.ButtonComponent colors="primary" size="big">See Venue</buttons.ButtonComponent>
        </S.TopVenueInfoDiv>
        </Link>
    </S.TopVenueWrapper>
    
    }


}