import { holidazeUrl } from "../../environment";
import { postData } from "./post";
import { MakeBooking } from "../../components/interfaces/bookingInterFace";

export const createBooking = async (formInfo: MakeBooking) => {
  const bookingUrl = `${holidazeUrl}/bookings`;
  console.log(bookingUrl);
  console.log(formInfo);
  console.log(typeof (formInfo.guests));


  await postData(bookingUrl, formInfo);
};
