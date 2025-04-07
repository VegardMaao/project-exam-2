/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { buttons, EditProfileStyles as S } from "../../styles";

const schema = yup
  .object({
    bio: yup.string(),
    avatarUrl: yup.string(),
    avatarAlt: yup.string(),
    bannerUrl: yup.string(),
    bannerAlt: yup.string(),
    venueMan: yup.bool(),
  })
  .required();

export function EditProfileForm(params: any) {
  const navigate = useNavigate();
  console.log(navigate);

  const { register } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  //getValues,
  //formState: { errors, isDirty, isValid },

  return (
    <S.EditProfileForm>
      <S.EditProfileLabel htmlFor="bio">Update Bio</S.EditProfileLabel>
      <S.EditProfileTextArea {...register("bio")} />
      <S.EditProfileLabel htmlFor="avatarUrl">
        Update Avatar URL
      </S.EditProfileLabel>
      <S.EditProfileInput {...register("avatarUrl")} />
      <S.EditProfileLabel htmlFor="avatarAlt">
        Avatar Description
      </S.EditProfileLabel>
      <S.EditProfileInput {...register("avatarAlt")} />
      <S.EditProfileLabel htmlFor="bannerUrl">
        Update Banner URl
      </S.EditProfileLabel>
      <S.EditProfileInput {...register("bannerUrl")} />
      <S.EditProfileLabel htmlFor="bannerAlt">
        Banner Description
      </S.EditProfileLabel>
      <S.EditProfileInput {...register("bannerAlt")} />
      <S.EditProfileLabel htmlFor="venueMan">
        Do you want to host and manage venues?
      </S.EditProfileLabel>
      <S.EditProfileInput {...register("venueMan")} />
      <buttons.ButtonComponent>Submit changes</buttons.ButtonComponent>
    </S.EditProfileForm>
  );
}
