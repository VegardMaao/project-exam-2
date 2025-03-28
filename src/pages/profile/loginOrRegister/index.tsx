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

  return (
    <main>
      <Metadata title={title} description={description} />
      <LoginRegister.flexBox>
        <LoginUserForm setTitle={setTitle} setDescription={setDescription} />
        <RegisterUserForm setTitle={setTitle} setDescription={setDescription} />
      </LoginRegister.flexBox>
    </main>
  );
}
