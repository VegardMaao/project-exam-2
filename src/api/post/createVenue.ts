import { holidazeUrl } from "../../environment";
import { postData } from "./post";
import { VenueCreator } from "../../components/interfaces/createVenueInterface";

export const createVenue = async (formInfo: VenueCreator) => {
    const venueUrl = `${holidazeUrl}/venues`;
    const { data } = await postData(venueUrl, formInfo);
    return data.id;
};
