import { useEffect, useState } from "react";
// @ts-ignore
import { sortByRating } from "../../sortArrays/sortArrays.js";
// @ts-ignore
import { topVenueStyles } from "../../../styles";
import { Link } from "react-router-dom";

export function SetTopVenue({data} : {data : any}) {
    const [topVenue, SetTopVenue] = useState();

    useEffect(() => {
        const sortVenueData = data.sort(sortByRating);
        SetTopVenue(sortVenueData[0]);
    }, []);

    if (topVenue) {
        const { id, name, description, media } = topVenue || {};
        console.log(name, description, media);
        return <topVenueStyles.TopVenueWrapper url={media[0].url} title={media[0].alt}>
        <Link to={`/venues/${id}`}>
        <topVenueStyles.TopVenueInfoDiv>
            <topVenueStyles.TopVenueHeader>{name}</topVenueStyles.TopVenueHeader>
            <topVenueStyles.TopVenueParagraph>{description}</topVenueStyles.TopVenueParagraph>
        </topVenueStyles.TopVenueInfoDiv>
        </Link>
    </topVenueStyles.TopVenueWrapper>
    
    }


}