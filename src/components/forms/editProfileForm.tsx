/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
//@ts-ignore
import { buttons, EditProfileStyles as S } from "../../styles";
import useLoggedInStore from "../../zustandStores/loggedInStore";
import { editProfile } from "../../api/put/editProfile";
import { EditForm } from "../interfaces/EditFormInterface";

const defaultAvatar =
  "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400";

const defaultBanner =
  "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=500&w=1500";

const schema = yup
  .object({
    bio: yup.string().optional(),
    avatar: yup.object().shape({
      url: yup.string().url().optional(),
      alt: yup.string().optional(),
    }),
    banner: yup.object().shape({
      url: yup.string().url().optional(),
      alt: yup.string().optional(),
    }),
    venueManager: yup.bool().required(),
  })
  .required();

export function EditProfileForm() {
  // const navigate = useNavigate();
  const { getName } = useLoggedInStore();
  const userName = getName();
  const userNameAsString = `${userName}`;
  const {
    register,
    control,
    getValues,
    formState: { errors },
  } = useForm<EditForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    const formData = getValues();
    try {
      editProfile(formData, userNameAsString);
      // navigate("/profile");
    } catch (error: any) {
      console.dir(error);
      if (error instanceof Error) {
        return alert(error.message);
      }
    }
  };

  return (
    <S.EditProfileForm onSubmit={onSubmit}>
      <Controller
        name="bio"
        control={control}
        render={() => (
          <>
            <S.EditProfileLabel>Your Bio</S.EditProfileLabel>
            <S.EditProfileInput {...register("bio")} />
            <S.ErrorMsg display={errors.bio?.message ? "inline" : "none"}>
              {errors.bio?.message}
            </S.ErrorMsg>
          </>
        )}
      />
      <Controller
        name="avatar.url"
        control={control}
        render={() => (
          <>
            <S.EditProfileLabel>Link to your Avatar</S.EditProfileLabel>
            <S.EditProfileInput {...register("avatar.url")} />
            <S.ErrorMsg
              display={errors.avatar?.url?.message ? "inline" : "none"}
            >
              {errors.avatar?.url?.message}
            </S.ErrorMsg>
          </>
        )}
      />
      <Controller
        name="avatar.alt"
        control={control}
        render={() => (
          <>
            <S.EditProfileLabel>Avatar Description</S.EditProfileLabel>
            <S.EditProfileInput {...register("avatar.alt")} />
            <S.ErrorMsg
              display={errors.avatar?.alt?.message ? "inline" : "none"}
            >
              {errors.avatar?.alt?.message}
            </S.ErrorMsg>
          </>
        )}
      />
      <Controller
        name="banner.url"
        control={control}
        render={() => (
          <>
            <S.EditProfileLabel>Link to your Banner image</S.EditProfileLabel>
            <S.EditProfileInput {...register("banner.url")} />
            <S.ErrorMsg
              display={errors.banner?.url?.message ? "inline" : "none"}
            >
              {errors.banner?.url?.message}
            </S.ErrorMsg>
          </>
        )}
      />
      <Controller
        name="banner.alt"
        control={control}
        render={() => (
          <>
            <S.EditProfileLabel>Banner Description</S.EditProfileLabel>
            <S.EditProfileInput {...register("banner.alt")} />
            <S.ErrorMsg
              display={errors.banner?.alt?.message ? "inline" : "none"}
            >
              {errors.banner?.alt?.message}
            </S.ErrorMsg>
          </>
        )}
      />
      <Controller
        name="venueManager"
        control={control}
        render={() => (
          <>
            <div>
              <S.EditProfileLabel>Venue manager? </S.EditProfileLabel>
              <S.EditProfileInput
                type="checkbox"
                unchecked="true"
                {...register("venueManager")}
              />
            </div>
          </>
        )}
      />
      <buttons.ButtonComponent colors="inverted">
        Submit changes
      </buttons.ButtonComponent>
    </S.EditProfileForm>
  );
}
