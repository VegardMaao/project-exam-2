import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
//@ts-ignore
import { buttons, LoginRegister as S } from "../../styles";
//@ts-ignore
import { emailRegex } from "../regex";
//@ts-ignore
import { usePostAPI } from "../../api/index.js";
// import { onSubmit } from "./onSubmit";

const userErrorMsg = "Username must be at least 3 letters, max 15"
const emailErrorMsg = "A valid Noroff email is required";
const passwordErrorMsg = "Password is required";

const schema = yup.object({
    username: yup.string().min(3, userErrorMsg).max(15).required(userErrorMsg),
    email: yup.string().email(emailErrorMsg).min(7, emailErrorMsg).matches(emailRegex, emailErrorMsg).required(emailErrorMsg),
    password: yup.string().required(passwordErrorMsg),
    url: yup.string().required()
}).required();

export function RegisterUserForm(params: any) {
    const {setTitle, setDescription, baseUrl} = params;
    const registerUrl = `${baseUrl}/register`;
    const [userData, setUserData] = useState();
    const [targetUrl, setTargetUrl] = useState();
    
    const { register, handleSubmit, formState: { errors, isDirty, isValid }, trigger } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    useEffect(() => {
        trigger();
        setTitle("Register user");
        setDescription("Register a new user");
    }, [trigger]);
    
    function onSubmit(formData:any){
        console.log(formData);
        const { url } = formData;
        const dataObj = formData;
        delete dataObj.url;

        setUserData(dataObj);
        setTargetUrl(url);
    }

    console.log(targetUrl, userData)

    return <S.LoginRegisterForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Register a new user</h2>
            <S.FormLabel htmlFor="username">Your new username</S.FormLabel>
            <S.FormInput {...register('username')} placeholder="User McNameson" color={errors.username?.message  ? "red" : "green"} />
            <S.ErrorMsg display={errors.username?.message ? "inline" : "none"}>{errors.username?.message}</S.ErrorMsg>
            <S.FormLabel htmlFor="email">Your Noroff Email</S.FormLabel>
            <S.FormInput {...register('email')} placeholder="name@stud.noroff.no" color={errors.email?.message  ? "red" : "green"} />
            <S.ErrorMsg display={errors.email?.message ? "inline" : "none"}>{errors.email?.message}</S.ErrorMsg>
            <S.FormLabel htmlFor="password">Your Password</S.FormLabel>
            <S.FormInput type="password" placeholder="Password" {...register('password')} color={errors.password?.message  ? "red" : "green"} />
            <S.ErrorMsg display={errors.password?.message ? "inline" : "none"}>{errors.password?.message}</S.ErrorMsg>

            <S.FormInput type="hidden" value={registerUrl} {...register(`url`)}/>
            <buttons.ButtonComponent disabled={!isDirty || !isValid} colors={!isDirty || !isValid ? "" : "inverted"} type="submit">Register new user</buttons.ButtonComponent>
    </S.LoginRegisterForm>
};