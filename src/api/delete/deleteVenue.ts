import { holidazeUrl } from "../../environment";
import { deleteData } from "./delete";

export const deleteVenue = async (id: string) => {
    const venueUrl = `${holidazeUrl}/venues/${id}`;
    console.log(venueUrl);

    await deleteData(venueUrl);
};
