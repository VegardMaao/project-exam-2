// @ts-ignore
import { singleVenueStyles as S } from "../../../../styles/index.js";

export function SetAmenities(params: any) {
  const arr = [];
  for (const [key, value] of Object.entries(params.params)) {
    arr.push(`${key}: ${value ? "yes" : "no"}`);
  }
  return (
    <S.AmenitiesDiv>
      <S.AmenitiesItem props="underline">
        Included in your stay:
      </S.AmenitiesItem>
      {arr.map((item: any) => (
        <S.AmenitiesItem key={item}>{item}</S.AmenitiesItem>
      ))}
    </S.AmenitiesDiv>
  );
}
