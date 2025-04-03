/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { Metadata } from "../../../../components/metadata/metadata";
import { RegisterUserForm } from "../../../../components/forms/register";
//@ts-ignore
import { LoginRegister } from "../../../../styles";

export function RegisterPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main>
      <Metadata title={title} description={description} />
      <LoginRegister.flexBox>
        <RegisterUserForm setTitle={setTitle} setDescription={setDescription} />
      </LoginRegister.flexBox>
    </main>
  );
}
