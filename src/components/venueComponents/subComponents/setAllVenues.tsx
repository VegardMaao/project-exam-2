/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VenuesArr } from "../../interfaces/venues.js";
//@ts-ignore
import { buttons, allVenuesStyles as S } from "../../../styles";
import { SearchBar } from "../searchBar.js";

export function SetAllVenues({ data }: { data: VenuesArr }) {
  const [allVenues, setAllVenues] = useState<VenuesArr | undefined>(undefined);

  useEffect(() => {
    setAllVenues(data);
  }, [data]);

  if (allVenues) {
    return (
      <S.VenuesWrapper>
        <SearchBar originalArr={data} setAllVenues={setAllVenues} />
        <S.AllVenuesDiv>
          {allVenues.map((item) => (
            <S.VenueItem key={item.id}>
              <Link to={`/venues/${item.id}`}>
                <S.Thumbnail
                  src={
                    item.media[0]
                      ? item.media[0].url
                      : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                  }
                />
              </Link>
              <S.VenueTitle>{item.name}</S.VenueTitle>
              <S.VenueDescription>{item.description}</S.VenueDescription>
              <S.VenueDescription
                props={"underline"}
              >{`Up to ${item.maxGuests} guests, for ${item.price} dollars/night`}</S.VenueDescription>
              <Link to={`/venues/${item.id}`}>
                <buttons.ButtonComponent colors="primary" size="small">
                  See Venue
                </buttons.ButtonComponent>
              </Link>
            </S.VenueItem>
          ))}
        </S.AllVenuesDiv>
      </S.VenuesWrapper>
    );
  }
}
