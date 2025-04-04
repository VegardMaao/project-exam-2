/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { loadingStyles, ProfileElem as S } from "../../styles";
import { useGetAPI } from "../../api";
import { Venue } from "../interfaces/venues";
import { Link } from "react-router-dom";

interface VenueManagerInterFace {
  managerBool: boolean;
  url: string;
}

export function VenueManager(params: VenueManagerInterFace) {
  const { managerBool, url } = params;
  const { data, isLoading, isError } = useGetAPI(url);

  if (managerBool) {
    if (isLoading) {
      return <loadingStyles.Loader />;
    }

    if (isError) {
      return <div>Error loading data</div>;
    }
    return (
      <S.VenueManagerWrapper>
        <h2>User manages these venues</h2>
        <S.VenuesList>
          {data.map((venue: Venue) => (
            <li key={venue.id}>
              <Link to={`/venues/${venue.id}`}>
                <S.VenueName>{venue.name}</S.VenueName>
              </Link>
            </li>
          ))}
        </S.VenuesList>
      </S.VenueManagerWrapper>
    );
  } else {
    return (
      <S.VenueManagerWrapper>
        <h2>User does not host venues</h2>
      </S.VenueManagerWrapper>
    );
  }
}
