import { authUrl } from "../environment";
import { LoginUserData } from "./loginUser";
import { postData } from "./post";

export interface RegisterUserData extends LoginUserData {
  name: string;
}

export const registerUser = async (userData: RegisterUserData) => {
  const registerUrl = `${authUrl}/register`;
  await postData(registerUrl, userData);
};
