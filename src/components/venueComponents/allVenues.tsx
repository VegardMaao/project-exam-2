// @ts-ignore
import { useGetAPI } from "../../api/index.ts";
// @ts-ignore
import { loadingStyles } from "../../styles/index.js";
import { SetAllVenues } from "./subComponents/setAllVenues.tsx";

export function AllVenues({ url }: { url: string }) {
  const { data, isLoading, isError } = useGetAPI(url);

  if (isLoading) {
    return <loadingStyles.Loader />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return <SetAllVenues data={data} />;
}
