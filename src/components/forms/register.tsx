/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
//@ts-ignore
import { buttons, LoginRegister as S } from "../../styles";
//@ts-ignore
import { emailRegex } from "../regex";
import { registerUser } from "../../api/post/registerUser";
import { RegisterUserData } from "../interfaces/loginAndRegisterInterface";

const userErrorMsg = "name must be at least 3 letters, max 15";
const emailErrorMsg = "A valid Noroff email is required";
const passwordErrorMsg = "Password is required, 8 - 15 symbols/letters";

const schema = yup
  .object({
    name: yup.string().min(3, userErrorMsg).max(15).required(userErrorMsg),
    email: yup
      .string()
      .email(emailErrorMsg)
      .min(7, emailErrorMsg)
      .matches(emailRegex, emailErrorMsg)
      .required(emailErrorMsg),
    password: yup
      .string()
      .min(8, passwordErrorMsg)
      .max(15, passwordErrorMsg)
      .required(passwordErrorMsg),
  })
  .required();

export function RegisterUserForm(params: any) {
  const { setTitle, setDescription } = params;

  const {
    register,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<RegisterUserData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    setTitle("Register user");
    setDescription("Register a new user");
  }, []);

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    const formData = getValues();
    formData.name = formData.name.trim();
    try {
      await registerUser(formData);
    } catch (error: any) {
      console.dir(error);
      if (error instanceof Error) {
        return alert(error.message);
      }
    }
  };

  return (
    <S.LoginRegisterForm onSubmit={onSubmit}>
      <h2>Register a new user</h2>
      <S.FormLabel htmlFor="name">Your name</S.FormLabel>
      <S.FormInput
        {...register("name")}
        placeholder="User McNameson"
        color={errors.name?.message ? "red" : "green"}
      />
      <S.ErrorMsg display={errors.name?.message ? "inline" : "none"}>
        {errors.name?.message}
      </S.ErrorMsg>
      <S.FormLabel htmlFor="email">Your Noroff Email</S.FormLabel>
      <S.FormInput
        {...register("email")}
        placeholder="name@stud.noroff.no"
        color={errors.email?.message ? "red" : "green"}
      />
      <S.ErrorMsg display={errors.email?.message ? "inline" : "none"}>
        {errors.email?.message}
      </S.ErrorMsg>
      <S.FormLabel htmlFor="password">Your Password</S.FormLabel>
      <S.FormInput
        type="password"
        placeholder="Password"
        {...register("password")}
        color={errors.password?.message ? "red" : "green"}
      />
      <S.ErrorMsg display={errors.password?.message ? "inline" : "none"}>
        {errors.password?.message}
      </S.ErrorMsg>
      <buttons.ButtonComponent
        disabled={!isDirty || !isValid}
        colors={!isDirty || !isValid ? "" : "inverted"}
        type="submit"
      >
        Register new user
      </buttons.ButtonComponent>
    </S.LoginRegisterForm>
  );
}
