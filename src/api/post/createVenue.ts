import { holidazeUrl } from "../../environment";
import { postData } from "./post";
import { VenueCreator } from "../../components/interfaces/createVenueInterface";

/**
 * @description Posts new venue info to the backend 
 * @param {object} formInfo - the info for a new venue 
 * @returns 
 */
export const createVenue = async (formInfo: VenueCreator) => {
    const venueUrl = `${holidazeUrl}/venues`;
    const { data } = await postData(venueUrl, formInfo);
    return data.id;
};
