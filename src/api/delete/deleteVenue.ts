import { holidazeUrl } from "../../environment";
import { deleteData } from "./delete";

/**
 * @description deletes a venue 
 * @param {string} id - what venue ID that must be deleted
 */
export const deleteVenue = async (id: string) => {
    const venueUrl = `${holidazeUrl}/venues/${id}`;
    await deleteData(venueUrl);
};
