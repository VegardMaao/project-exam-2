/* eslint-disable @typescript-eslint/no-explicit-any */
import { holidazeUrl } from "../../environment";
import { putData } from "./put";

/**
 * @description updates an existing venue. Passes info on to generic put function
 * @param {object} venueData - the new and updated data for the venue 
 * @param {string} id - the venue id, selects what venue to edit
 */
export const editVenue = async (venueData: any, id: string) => {
    const venueUrl = `${holidazeUrl}/venues/${id}`;
    await putData(venueUrl, venueData);
};
