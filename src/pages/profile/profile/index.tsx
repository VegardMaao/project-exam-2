/* eslint-disable @typescript-eslint/ban-ts-comment */
import {BannerComp, AvatarComp, ProfileSummary} from "../../../components/profileComponents/index.ts"
import { useGetAPI } from "../../../api";
import { useParams } from "react-router-dom";
import { profilesUrl } from "../../../environment";
import useLoggedInStore from "../../../zustandStores/loggedInStore.ts";
//@ts-ignore
import { loadingStyles, ProfileElem as S } from "../../../styles"
import { VenueManager } from "../../../components/profileComponents/venueManager.tsx";

export function Profile() {
  const  { getName } = useLoggedInStore();
  const { name: userName } = useParams();  
  const urlFunc = () => {
    if (userName) {
      return `${profilesUrl}/${userName}`;
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
  const { banner, avatar, name, email, bio, venueManager } = data;
 
  const venuesUrl = `${url}/venues`;
  
  return <main>
    <S.ProfileWrapper>
    <BannerComp.ProfileBanner bannerInfo={banner} />
    <S.AvatarAndSummaryWrapper>
    <AvatarComp.ProfileAvatar avatarInfo={avatar} />
    <ProfileSummary.ProfileSummary name={name} email={email} bio={bio} />
    </S.AvatarAndSummaryWrapper>
    <VenueManager managerBool={venueManager} url={venuesUrl}/>
    </S.ProfileWrapper>
    </main>;

  }

};