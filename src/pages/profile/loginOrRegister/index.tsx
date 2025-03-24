import { useState } from "react";
import { Metadata } from "../../../components/metadata/metadata";
//@ts-ignore

export function LoginOrRegister() {    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");   
    // const authUrl = `https://v2.api.noroff.dev/auth`;


    return <main>
        <Metadata title={title} description={description}/>
        <div>LOGIN OR REGISTER</div>
    </main>
}