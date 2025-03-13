// @ts-ignore
import { useGetAPI } from "../../api/index.js";
// @ts-ignore
import { loadingStyles, singleVenueStyles as S } from "../../styles/index.js";

export function SingleVenue(params: any) { 
    const {url, setTitle, setDescription} = params;
    const {data, isLoading, isError} = useGetAPI(url);

    if (isLoading) {
      return <loadingStyles.Loader />;
    }

    if (isError) {
      return <div>Error loading data</div>;
    }

    console.log(data);
    const {description, name, location, maxGuests, media, meta, price, rating, _count} = data;
    console.log(media);
     
    setTitle(name);
    setDescription(description);

    return <S.SingleVenueWrapper>
        {/* <S.SinglevenueImage  /> */}
      </S.SingleVenueWrapper>
}