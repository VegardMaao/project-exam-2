import { authUrl } from "../environment";
import { postData } from "./post";

export interface LoginUserData {
  password: string;
  email: string;
}

export const loginUser = async (userData: LoginUserData) => {
  const loginUrl = `${authUrl}/login`;
  await postData(loginUrl, userData);
};
