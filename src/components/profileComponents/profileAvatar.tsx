/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-ignore
import { ProfileElem as S } from "../../styles";

interface Avatar {
    avatarInfo: {
        url: string,
        alt: string
    }
}

export function ProfileAvatar(avatarInfo: Avatar) {
    const info = avatarInfo.avatarInfo;
    return  <S.AvatarImg src={info.url} alt={info.alt}/>
}