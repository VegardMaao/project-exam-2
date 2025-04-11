/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { newVenueFormStyles as S, buttons as B } from "../../styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { createVenue } from "../../api/post/createVenue";
// import { VenueCreator } from "../interfaces/createVenueInterface";

const schema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    // media: yup
    //   .object({
    //     url: yup.string().required(),
    //     alt: yup.string().required(),
    //   })
    //   .optional(),
    price: yup.number().required(),
    maxGuests: yup.number().min(1, "Minimum 1").max(100, "Max 100").required(),
    rating: yup.number().max(5, "no more than 5").optional(),
    meta: yup.object({
      wifi: yup.bool().optional(),
      parking: yup.bool().optional(),
      breakfast: yup.bool().optional(),
      pets: yup.bool().optional(),
    }),
    location: yup.object({
      address: yup.string().optional(),
      city: yup.string().optional(),
      zip: yup.string().optional(),
      country: yup.string().optional(),
    }),
  })
  .required();

type creationType = yup.InferType<typeof schema>;

export function NewVenuePopUp(display: { display: string }) {
  const {
    register,
    control,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<creationType>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    const formData = getValues();
    try {
      createVenue(formData);
      console.log(formData);
    } catch (error: any) {
      console.dir(error);
      if (error instanceof Error) {
        return alert(error.message);
      }
    }
  };

  return (
    <S.NewVenueForm display={display} onSubmit={onSubmit}>
      <Controller
        name="name"
        control={control}
        render={() => (
          <>
            <S.NewVenueLabel>Venue name</S.NewVenueLabel>
            <S.NewVenueInput {...register("name")} />
            <S.ErrorMsg display={errors.name?.message ? "inline" : "none"}>
              {errors.name?.message}
            </S.ErrorMsg>
          </>
        )}
      />
      <Controller
        name="description"
        control={control}
        render={() => (
          <>
            <S.NewVenueLabel>Venue description</S.NewVenueLabel>
            <S.NewVenueInput {...register("description")} />
            <S.ErrorMsg
              display={errors.description?.message ? "inline" : "none"}
            >
              {errors.description?.message}
            </S.ErrorMsg>
          </>
        )}
      />
      {/* <Controller
        name="media.url"
        control={control}
        render={() => (
          <>
            <S.NewVenueLabel>Image url</S.NewVenueLabel>
            <S.NewVenueInput {...register("media.url")} />
            <S.ErrorMsg
              display={errors.media?.url?.message ? "inline" : "none"}
            >
              {errors.media?.url?.message}
            </S.ErrorMsg>
          </>
        )}
      />

      <Controller
        name="media.alt"
        control={control}
        render={() => (
          <>
            <S.NewVenueLabel>Image description</S.NewVenueLabel>
            <S.NewVenueInput {...register("media.alt")} />
            <S.ErrorMsg
              display={errors.media?.alt?.message ? "inline" : "none"}
            >
              {errors.media?.alt?.message}
            </S.ErrorMsg>
          </>
        )}
      /> */}
      {/* 
      <Controller
        name="media"
        control={control}
        render={() => (
          <>
            <S.NewVenueLabel>Image URL</S.NewVenueLabel>
            <S.NewVenueInput {...register("media.url")} />
            <S.ErrorMsg
              display={errors.media?.url?.message ? "inline" : "none"}
            >
              {errors.media?.url?.message}
            </S.ErrorMsg>

            <S.NewVenueLabel>Image description</S.NewVenueLabel>
            <S.NewVenueInput {...register("media.alt")} />
            <S.ErrorMsg
              display={errors.media?.alt?.message ? "inline" : "none"}
            >
              {errors.media?.alt?.message}
            </S.ErrorMsg>
          </>
        )}
      /> */}

      <Controller
        name="price"
        control={control}
        render={() => (
          <>
            <S.NewVenueLabel>Price per night</S.NewVenueLabel>
            <S.NewVenueInput
              type="number"
              min="1"
              max="100"
              {...register("price", { valueAsNumber: true })}
            />
            <S.ErrorMsg display={errors.price?.message ? "inline" : "none"}>
              {errors.price?.message}
            </S.ErrorMsg>
          </>
        )}
      />

      <Controller
        name="maxGuests"
        control={control}
        render={() => (
          <>
            <S.NewVenueLabel>Max guests</S.NewVenueLabel>
            <S.NewVenueInput
              type="number"
              min="1"
              max="100"
              {...register("maxGuests", { valueAsNumber: true })}
            />
            <S.ErrorMsg display={errors.maxGuests?.message ? "inline" : "none"}>
              {errors.maxGuests?.message}
            </S.ErrorMsg>
          </>
        )}
      />

      <Controller
        name="location.address"
        control={control}
        render={() => (
          <>
            <S.NewVenueLabel>Location address</S.NewVenueLabel>
            <S.NewVenueInput {...register("location.address")} />
            <S.ErrorMsg
              display={errors.location?.address?.message ? "inline" : "none"}
            >
              {errors.location?.address?.message}
            </S.ErrorMsg>
          </>
        )}
      />

      <B.ButtonComponent
        disabled={!isDirty || !isValid}
        colors={!isDirty || !isValid ? "" : "inverted"}
      >
        Submit
      </B.ButtonComponent>
    </S.NewVenueForm>
  );
}
