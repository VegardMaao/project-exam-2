/* eslint-disable @typescript-eslint/no-explicit-any */
import { holidazeUrl } from "../../environment";
import { putData } from "./put";

export const editVenue = async (venueData: any, id: string) => {
    const venueUrl = `${holidazeUrl}/venues/${id}`;
    await putData(venueUrl, venueData);
};
