/* eslint-disable @typescript-eslint/ban-ts-comment */
import {BannerComp} from "../../../components/profileComponents/index.ts"
//@ts-ignore
import { ProfileElem as S } from "../../../styles"

export function Profile() {
  return <main>
    <S.ProfileWrapper>
    <BannerComp.ProfileBanner />
    
    </S.ProfileWrapper>
    </main>;
};