import { holidazeUrl } from "../../environment";
import { postData } from "./post";
import { MakeBooking } from "../../components/interfaces/bookingInterFace";

/**
 * @description Post function to create a new booking on an existing venue
 * @param {object} formInfo - the info to create a new booking. 
 *                            Venue ID is included in this object
 */
export const createBooking = async (formInfo: MakeBooking) => {
  const bookingUrl = `${holidazeUrl}/bookings`;
  await postData(bookingUrl, formInfo);
};
