/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createBooking } from "../../api/post/createBooking";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import useLoggedInStore from "../../zustandStores/loggedInStore";
//@ts-ignore
import { buttons, BookingFormStyles as S } from "../../styles";
import { Link } from "react-router-dom";
import { MakeBooking } from "../interfaces/bookingInterFace";

interface params {
  guests: number;
  id: string;
}

export function BookingForm(params: params) {
  const today = new Date().toISOString().split("T")[0];
  const [toDate, setToDate] = useState(today);
  const { loggedIn } = useLoggedInStore();
  const { guests: maxGuests, id } = params;

  const schema = yup
    .object({
      dateFrom: yup.string().required(),
      dateTo: yup.string().required(),
      guests: yup
        .number()
        .min(0)
        .max(maxGuests, `max ${maxGuests} guests`)
        .required(),
      venueId: yup.string().required(),
    })
    .required();

  const {
    register,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<MakeBooking>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChange = () => {
    const formData = getValues();
    const tempDate = new Date(formData.dateFrom);
    const minimumToDate = new Date(tempDate.setDate(tempDate.getDate() + 1));
    setToDate(minimumToDate.toISOString().split("T")[0]);
  };

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    const formData = getValues();
    try {
      await createBooking(formData);
    } catch (error: any) {
      console.dir(error);
      if (error instanceof Error) {
        return alert(error.message);
      }
    }
  };

  if (loggedIn) {
    return (
      <S.Form onSubmit={onSubmit} onChange={onChange}>
        <S.FormLabel htmlFor="dateFrom">Date of arrival</S.FormLabel>
        <S.FormInput type="date" min={today} {...register("dateFrom")} />
        <S.ErrorMsg display={errors.dateFrom?.message ? "inline" : "none"}>
          {errors.dateFrom?.message}
        </S.ErrorMsg>
        <S.FormLabel htmlFor="dateTo">Date of departure</S.FormLabel>
        <S.FormInput type="date" min={toDate} {...register("dateTo")} />
        <S.ErrorMsg display={errors.dateTo?.message ? "inline" : "none"}>
          {errors.dateTo?.message}
        </S.ErrorMsg>
        <S.FormLabel htmlFor="guests">Amount of Guests</S.FormLabel>
        <S.FormInput
          type="number"
          min={0}
          max={maxGuests}
          {...register("guests", { valueAsNumber: true })}
        />
        <S.ErrorMsg display={errors.guests?.message ? "inline" : "none"}>
          {errors.guests?.message}
        </S.ErrorMsg>
        <S.FormInput type="hidden" value={id} {...register("venueId")} />
        <buttons.ButtonComponent
          disabled={!isDirty || !isValid}
          colors={!isDirty || !isValid ? "" : "inverted"}
          type="submit"
        >
          Book venue
        </buttons.ButtonComponent>
      </S.Form>
    );
  } else {
    <Link to={`/profile/login`}>
      <button>Log in to book</button>
    </Link>;
  }
}
