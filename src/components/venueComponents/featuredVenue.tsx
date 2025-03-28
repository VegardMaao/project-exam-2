// @ts-ignore
import { useGetAPI } from "../../api/index.ts";
// @ts-ignore
import { loadingStyles } from "../../styles/index.js";
import { SetTopVenue } from "./subComponents/topVenue.tsx";

export function FeaturedVenue({ url }: { url: string }) {
  const { data, isLoading, isError } = useGetAPI(url);

  if (isLoading) {
    return <loadingStyles.Loader />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return <SetTopVenue data={data} />;
}
