import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
//@ts-ignore
import { buttons, LoginRegister as S } from "../../styles";
//@ts-ignore
import { emailRegex } from "../regex";


const userErrorMsg = "A valid Noroff email is required";
const passwordErrorMsg = "Password is required";

const schema = yup.object({
    username: yup.string().email(userErrorMsg).min(7, userErrorMsg).matches(emailRegex, userErrorMsg).required(userErrorMsg),
    password: yup.string().required(passwordErrorMsg)
}).required();

export function LoginUserForm() {
    const { register, handleSubmit, formState: { errors, isDirty, isValid }, trigger } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    useEffect(() => {
        trigger();
    }, [trigger]);
    
    function onSubmit(data:any){
        console.log(data);
    }

    return <S.LoginRegisterForm onSubmit={handleSubmit(onSubmit)}>
            <S.FormLabel htmlFor="username">Your Noroff Email</S.FormLabel>
            <S.FormInput {...register('username')} placeholder="name@stud.noroff.no" color={errors.username?.message  ? "red" : "green"} />
            <S.ErrorMsg display={errors.username?.message ? "inline" : "none"}>{errors.username?.message}</S.ErrorMsg>
            <S.FormLabel htmlFor="password">Your Password</S.FormLabel>
            <S.FormInput type="password" placeholder="Password" {...register('password')} color={errors.password?.message  ? "red" : "green"} />
            <S.ErrorMsg display={errors.password?.message ? "inline" : "none"}>{errors.password?.message}</S.ErrorMsg>
            <buttons.ButtonComponent disabled={!isDirty || !isValid} colors={!isDirty || !isValid ? "" : "inverted"} type="submit">Submit</buttons.ButtonComponent>
    </S.LoginRegisterForm>
};