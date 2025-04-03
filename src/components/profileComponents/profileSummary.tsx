/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { ProfileElem as S } from "../../styles";

interface ProfileInfo {
  name: string;
  email: string;
  bio: string | null;
}

export function ProfileSummary(params: ProfileInfo) {
  const { name, email, bio } = params;

  return (
    <S.ProfileWrapper>
      <S.ProfileName>{name}</S.ProfileName>
      <S.ProfileBio>Email: {email}</S.ProfileBio>
      <S.ProfileBio display={bio === null ? "none" : "inline"}>
        {bio}
      </S.ProfileBio>
    </S.ProfileWrapper>
  );
}
