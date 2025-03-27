import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
//@ts-ignore
import { buttons, LoginRegister as S } from "../../styles";
//@ts-ignore
import { emailRegex } from "../regex";


const emailErrorMsg = "A valid Noroff email is required";
const passwordErrorMsg = "Password is required";

const schema = yup.object({
    email: yup.string().email(emailErrorMsg).min(7, emailErrorMsg).matches(emailRegex, emailErrorMsg).required(emailErrorMsg),
    password: yup.string().required(passwordErrorMsg)
}).required();

export function LoginUserForm(params: any) {
    const {setTitle, setDescription, baseUrl} = params;
    const loginUrl = `${baseUrl}/login`

    const { register, handleSubmit, formState: { errors, isDirty, isValid }, trigger } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    useEffect(() => {
        trigger();
        setTitle("Log In");
        setDescription("Log in to your account");
    }, [trigger]);
    
    function onSubmit(data:any){
        console.log(data);
        console.log(loginUrl);
        
    }

    return <S.LoginRegisterForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Log in existing user</h1>
            <S.FormLabel htmlFor="email">Your Noroff Email</S.FormLabel>
            <S.FormInput {...register('email')} placeholder="name@stud.noroff.no" color={errors.email?.message  ? "red" : "green"} />
            <S.ErrorMsg display={errors.email?.message ? "inline" : "none"}>{errors.email?.message}</S.ErrorMsg>
            <S.FormLabel htmlFor="password">Your Password</S.FormLabel>
            <S.FormInput type="password" placeholder="Password" {...register('password')} color={errors.password?.message  ? "red" : "green"} />
            <S.ErrorMsg display={errors.password?.message ? "inline" : "none"}>{errors.password?.message}</S.ErrorMsg>
            <buttons.ButtonComponent disabled={!isDirty || !isValid} colors={!isDirty || !isValid ? "" : "inverted"} type="submit">Log in</buttons.ButtonComponent>
    </S.LoginRegisterForm>
};