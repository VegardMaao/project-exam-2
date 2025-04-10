import { holidazeUrl } from "../../environment";
// import { postData } from "./post";
import { VenueCreator } from "../../components/interfaces/createVenueInterface";

export const createVenue = async (formInfo: VenueCreator) => {
    const venueUrl = `${holidazeUrl}/venues`;
    console.log(formInfo, venueUrl);

    // await postData(venueUrl, formInfo);
};
