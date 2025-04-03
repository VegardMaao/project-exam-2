import { holidazeUrl } from "../../environment";
import { postData } from "./post";
import { MakeBooking } from "../../components/interfaces/bookingInterFace";

export const createBooking = async (formInfo: MakeBooking) => {
  const bookingUrl = `${holidazeUrl}/bookings`;
  await postData(bookingUrl, formInfo);
};
