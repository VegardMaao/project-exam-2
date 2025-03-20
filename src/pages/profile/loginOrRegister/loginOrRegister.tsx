import { useState } from "react";
import { Metadata } from "../../../components/metadata/metadata";

export function LoginOrRegister() {    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");   
    const authUrl = `https://v2.api.noroff.dev/auth`;
    console.log(authUrl)
    return <main>
        <Metadata title={title} description={description}/>
    </main>
}