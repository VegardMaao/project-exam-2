import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VenuesArr } from "../../interfaces/venues.js";
//@ts-ignore
import { allVenuesStyles as S } from "../../../styles";

export function SetAllVenues({data} : {data : VenuesArr}) {
    const [allVenues, setAllVenues] = useState();

    useEffect(() => {
        setAllVenues(data);
    }, []);

    console.log(allVenues);

    if (allVenues) {
        return <S.VenuesWrapper>
        <S.AllVenuesDiv>
            {allVenues.map((item) => (
                <S.VenueItem key={item.id}>
                    <Link to={`/venues/${item.id}`}>
                        <S.Thumbnail src={item.media[0] ? item.media[0].url : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} /> 
                    </Link>
                    <S.VenueTitle>{item.name}</S.VenueTitle>
                    <S.VenueDescription>{item.description}</S.VenueDescription>
                </S.VenueItem>
            ))}
        </S.AllVenuesDiv>
    </S.VenuesWrapper>
    }
}