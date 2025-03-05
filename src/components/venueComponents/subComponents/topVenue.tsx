import { useEffect, useState } from "react";
// @ts-ignore
import { sortByRating } from "../../sortArrays/sortArrays.js";
// @ts-ignore
import { topVenueStyles as S } from "../../../styles";
import { Link } from "react-router-dom";
import { VenuesArr } from "../../interfaces/venues.js";

export function SetTopVenue({data} : {data : VenuesArr}) {
    const [topVenue, SetTopVenue] = useState();

    useEffect(() => {
        const sortVenueData = data.sort(sortByRating);
        SetTopVenue(sortVenueData[0]);
    }, []);

    if (topVenue) {
        const { id, name, description, media } = topVenue || {};
        return <S.TopVenueWrapper url={media[0].url} title={media[0].alt}>
        <Link to={`/venues/${id}`}>
        <S.TopVenueInfoDiv>
            <S.TopVenueHeader>{name}</S.TopVenueHeader>
            <S.TopVenueParagraph>{description}</S.TopVenueParagraph>
        </S.TopVenueInfoDiv>
        </Link>
    </S.TopVenueWrapper>
    
    }


}