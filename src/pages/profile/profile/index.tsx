/* eslint-disable @typescript-eslint/ban-ts-comment */
import {BannerComp, AvatarComp} from "../../../components/profileComponents/index.ts"
import { useGetAPI } from "../../../api";
import { useParams } from "react-router-dom";
import { profilesUrl } from "../../../environment";
import useLoggedInStore from "../../../zustandStores/loggedInStore.ts";
//@ts-ignore
import { loadingStyles, ProfileElem as S } from "../../../styles"

export function Profile() {
  const  { getName } = useLoggedInStore();
  const { name } = useParams();  
  const urlFunc = () => {
    if (name) {
      return `${profilesUrl}/${name}`;
    } else {
      const nameFromStore = getName();
      return `${profilesUrl}/${nameFromStore}`;
    }
  }

  const url = urlFunc();

  const { data, isLoading, isError } = useGetAPI(url);
  if (isLoading) {
    return <loadingStyles.Loader />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (data.name) {
  console.log(data)
  const { banner, avatar, name } = data;
  console.log(name);
  
  
  return <main>
    <S.ProfileWrapper>
    <BannerComp.ProfileBanner bannerInfo={banner} />
    <AvatarComp.ProfileAvatar avatarInfo={avatar} />
    </S.ProfileWrapper>
    </main>;

  }

};