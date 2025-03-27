import { useState } from "react";
import { Metadata } from "../../../components/metadata/metadata";
//@ts-ignore
import { LoginUserForm } from "../../../components/loginOrRegisterComp/login";
import { RegisterUserForm } from "../../../components/loginOrRegisterComp/register";
//@ts-ignore
import { LoginRegister } from "../../../styles";

export function LoginOrRegister() {    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");   
    const authUrl = `https://v2.api.noroff.dev/auth`;

    return <main>
        <Metadata title={title} description={description}/>
        <LoginRegister.flexBox>
        <LoginUserForm setTitle={setTitle} setDescription={setDescription} baseUrl={authUrl}/>
        <RegisterUserForm setTitle={setTitle} setDescription={setDescription} baseUrl={authUrl} />
        </LoginRegister.flexBox>
    </main>
}