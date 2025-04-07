/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { ConfirmationStyles as S } from "../../styles";

export function BookingConfirmed() {
  return (
    <main>
      <S.ConfirmationWrapper>
        <h1>Booking confirmed</h1>
        <p>Enjoy your stay!</p>
      </S.ConfirmationWrapper>
    </main>
  );
}
