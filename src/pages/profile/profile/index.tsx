/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  BannerComp,
  AvatarComp,
  ProfileSummary,
  UserBookings,
  VenueManager,
} from "../../../components/profileComponents/index.ts";
import { useGetAPI } from "../../../api";
import { useParams } from "react-router-dom";
import { profilesUrl } from "../../../environment";
import useLoggedInStore from "../../../zustandStores/loggedInStore.ts";
//@ts-ignore
import { loadingStyles, buttons, ProfileElem as S } from "../../../styles";

export function Profile() {
  const { getName } = useLoggedInStore();
  const nameFromStore = getName();
  const { name: userName } = useParams();
  const urlFunc = () => {
    if (userName) {
      return `${profilesUrl}/${userName}`;
    } else {
      return `${profilesUrl}/${nameFromStore}`;
    }
  };

  const userChecker = () => {
    if (nameFromStore === userName || !userName) {
      return true;
    } else {
      return false;
    }
  };

  const myUserBool = userChecker();

  const url = urlFunc();

  const { data, isLoading, isError } = useGetAPI(url);
  if (isLoading) {
    return <loadingStyles.Loader />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (data.name) {
    const { banner, avatar, name, email, bio, venueManager } = data;

    const venuesUrl = `${url}/venues`;

    return (
      <main>
        <S.ProfileWrapper>
          <BannerComp.ProfileBanner bannerInfo={banner} />
          <S.AvatarAndSummaryWrapper>
            <AvatarComp.ProfileAvatar avatarInfo={avatar} />
            <ProfileSummary.ProfileSummary
              name={name}
              email={email}
              bio={bio}
            />
          </S.AvatarAndSummaryWrapper>
          <S.EditProfileLink
            display={myUserBool ? "block" : "none"}
            to={"/profile/edit"}
          >
            <buttons.ButtonComponent>Edit your profile</buttons.ButtonComponent>
          </S.EditProfileLink>
          <S.FlexBox>
            <UserBookings.UserBookings />
            <VenueManager.VenueManager
              managerBool={venueManager}
              url={venuesUrl}
            />
          </S.FlexBox>
        </S.ProfileWrapper>
      </main>
    );
  }
}
