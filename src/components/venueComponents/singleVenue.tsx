/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { useGetAPI } from "../../api/index.ts";
// @ts-ignore
import { loadingStyles } from "../../styles";
import { DisplaySingleVenue } from "./subComponents/displaySingleVenue.js";

interface SingleVenue {
  url: string;
  setTitle: (name: string) => void;
  setDescription: (description: string) => void;
}

export function SingleVenue(params: SingleVenue) {
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
