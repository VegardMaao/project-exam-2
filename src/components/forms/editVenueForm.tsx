/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
// prettier-ignore
import { editVenueStyles as S, buttons as B, deleteButton as D } from "../../styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm, useFieldArray } from "react-hook-form"; //? Added useFieldArray
import { editVenue } from "../../api/put/editVenue";
import { deleteVenue } from "../../api/delete/deleteVenue";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    media: yup.array().of(
      yup.object({
        url: yup.string().required(),
        alt: yup.string().required(),
      })
    ),
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

export function EditVenuePopUp(props: {
  id: string;
  display: boolean;
  handleOnSubmit: () => void;
  handleOnCancel: () => void;
  handleOnDelete: () => void;
}) {
  const { id, display, handleOnSubmit, handleOnCancel, handleOnDelete } = props;
  const {
    register,
    control,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<creationType>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "media",
  });

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    const formData = getValues();
    try {
      await editVenue(formData, id);
      handleOnSubmit();
    } catch (error: any) {
      console.dir(error);
      if (error instanceof Error) {
        return alert(error.message);
      }
    }
  };

  const onCancel = (e: Event) => {
    e.preventDefault();
    handleOnCancel();
  };

  const onDelete = (e: Event) => {
    e.preventDefault();
    handleOnDelete();
    deleteVenue(id);
    navigate("/profile");
  };

  return (
    <S.EditVenueForm display={display ? "flex" : "none"} onSubmit={onSubmit}>
      <Controller
        name="name"
        control={control}
        render={() => (
          <>
            <S.EditVenueLabel>Venue name</S.EditVenueLabel>
            <S.EditVenueInput {...register("name")} />
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
            <S.EditVenueLabel>Venue description</S.EditVenueLabel>
            <S.EditVenueInput {...register("description")} />
            <S.ErrorMsg
              display={errors.description?.message ? "inline" : "none"}
            >
              {errors.description?.message}
            </S.ErrorMsg>
          </>
        )}
      />

      <Controller
        name="media"
        control={control}
        render={() => (
          <>
            <S.EditVenueLabel>Images</S.EditVenueLabel>
            {fields.map((field, index) => (
              <div key={field.id}>
                <S.EditVenueLabel>Image URL</S.EditVenueLabel>
                <S.EditVenueInput {...register(`media.${index}.url`)} />
                <S.ErrorMsg
                  display={
                    errors.media?.[index]?.url?.message ? "inline" : "none"
                  }
                >
                  {errors.media?.[index]?.url?.message}
                </S.ErrorMsg>

                <S.EditVenueLabel>Image description</S.EditVenueLabel>
                <S.EditVenueInput {...register(`media.${index}.alt`)} />
                <S.ErrorMsg
                  display={
                    errors.media?.[index]?.alt?.message ? "inline" : "none"
                  }
                >
                  {errors.media?.[index]?.alt?.message}
                </S.ErrorMsg>
                <B.ButtonComponent type="button" onClick={() => remove(index)}>
                  Delete
                </B.ButtonComponent>
              </div>
            ))}
            <B.ButtonComponent
              type="button"
              onClick={() => append({ url: "", alt: "" })}
            >
              Add image
            </B.ButtonComponent>
          </>
        )}
      />

      <Controller
        name="price"
        control={control}
        render={() => (
          <>
            <S.EditVenueLabel>Price per night</S.EditVenueLabel>
            <S.EditVenueInput
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
            <S.EditVenueLabel>Max guests</S.EditVenueLabel>
            <S.EditVenueInput
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
            <S.EditVenueLabel>Location address</S.EditVenueLabel>
            <S.EditVenueInput {...register("location.address")} />
            <S.ErrorMsg
              display={errors.location?.address?.message ? "inline" : "none"}
            >
              {errors.location?.address?.message}
            </S.ErrorMsg>
          </>
        )}
      />

      <S.WideBox>
        <B.ButtonComponent onClick={onCancel}>Cancel</B.ButtonComponent>
        <B.ButtonComponent
          type="submit"
          disabled={!isDirty || !isValid}
          colors={!isDirty || !isValid ? "" : "inverted"}
        >
          Submit
        </B.ButtonComponent>

        <D.DeleteButton onClick={onDelete}>DELETE VENUE</D.DeleteButton>
      </S.WideBox>
    </S.EditVenueForm>
  );
}
