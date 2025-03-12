// @ts-ignore
import { useGetAPI } from "../../api/index.js";
// @ts-ignore
import { loadingStyles } from "../../styles/index.js";


export function FeaturedVenue({url} : {url: string}) {

    const {data, isLoading, isError} = useGetAPI(url);

    if (isLoading) {
      return <loadingStyles.Loader />;
    }

    if (isError) {
      return <div>Error loading data</div>;
    }

    return <div></div>
}