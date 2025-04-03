/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-ignore
import { ProfileElem as S } from "../../styles";

interface Banner {
  bannerInfo: {
    url: string;
    alt: string;
  };
}

export function ProfileBanner(bannerInfo: Banner) {
  const info = bannerInfo.bannerInfo;
  return <S.BannerImg url={info.url} alt={info.alt} />;
}
