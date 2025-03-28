// @ts-ignore
import { useGetAPI } from "../../api/index.ts";
// @ts-ignore
import { loadingStyles } from "../../styles";
import { DisplaySingleVenue } from "./subComponents/displaySingleVenue.js";

export function SingleVenue(params: any) {
  const { url, setTitle, setDescription } = params;
  const { data, isLoading, isError } = useGetAPI(url);

  if (isLoading) {
    return <loadingStyles.Loader />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  const { description, name } = data;

  setTitle(name);
  setDescription(description);

  return <DisplaySingleVenue venueInfo={data} />;
}
