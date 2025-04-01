/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
//@ts-ignore
import { dummyData } from "./dummyJSON.js"
//@ts-ignore
import { ProfileElem as S } from "../../styles"

export function ProfileBanner() {
    console.log(dummyData);
    return  <S.BannerImg url={dummyData.data.banner.url} />
}