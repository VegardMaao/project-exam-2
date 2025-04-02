/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Route, Routes } from "react-router-dom";
//@ts-ignore
import { LoginPage } from "./profile/loginOrRegister/login";
import { RegisterPage } from "./profile/loginOrRegister/register";
import { Profile } from "./profile";
import useLoggedInStore from "../../zustandStores/loggedInStore";

export function ProfileRouter() {
  const { loggedIn } = useLoggedInStore();
  if (loggedIn) {
    return (
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path=":name" element={<Profile />} />
        <Route path="/undefined" element={<Profile />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/*" element={<LoginPage />} />
      </Routes>
    );
  }
}
