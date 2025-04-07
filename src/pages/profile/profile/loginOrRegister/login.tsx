/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { Metadata } from "../../../../components/metadata/metadata";
import { Link } from "react-router-dom";
//@ts-ignore
import { LoginUserForm } from "../../../../components/forms/loginForm";
//@ts-ignore
import { LoginRegister } from "../../../../styles";

export function LoginPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main>
      <Metadata title={title} description={description} />
      <LoginRegister.flexBox>
        <LoginUserForm setTitle={setTitle} setDescription={setDescription} />
        <Link to={"/profile/register"}>Register a new user</Link>
      </LoginRegister.flexBox>
    </main>
  );
}
