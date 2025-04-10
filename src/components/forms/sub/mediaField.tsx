// /* eslint-disable @typescript-eslint/ban-ts-comment */
// //@ts-ignore
// import { newVenueFormStyles as S } from "../../../styles";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { MediaInterface } from "../../interfaces/createVenueInterface";
// import { useForm, Controller, useFieldArray } from "react-hook-form";

// const mediaSchema: MediaInterface = yup.object().shape({
//   url: yup.string().required(),
//   alt: yup.string().required(),
// });

// export function MediaFields() {
//   const {
//     register,
//     control,
//     formState: { errors },
//   } = useForm<MediaInterface>({
//     resolver: yupResolver(mediaSchema),
//     mode: "onChange",
//     defaultValues: {
//       url: "",
//       alt: "",
//     },
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "media",
//   });
//   return (
//     <>
//       {fields.map((item, index) => (
//         <Controller
//           name={`media${index}.alt`}
//           control={control}
//           render={() => (
//             <>
//               <S.NewVenueLabel>Image description</S.NewVenueLabel>
//               <S.NewVenueInput {...register(`media${index}.alt`)} />
//               <S.ErrorMsg
//                 display={errors.media.index.alt?.message ? "inline" : "none"}
//               >
//                 {errors.media?.alt?.message}
//               </S.ErrorMsg>
//             </>
//           )}
//         />
//       ))}
//     </>
//   );
// }

// Gotta take a break, not sure if I am doing this right anyway
