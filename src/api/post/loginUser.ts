import { authUrl } from "../../environment";
import { postData } from "./post";
import { LoginUserData } from "../../components/interfaces/loginAndRegisterInterface";

export const loginUser = async (userData: LoginUserData) => {
  const loginUrl = `${authUrl}/login`;
  const { data } = await postData(loginUrl, userData);
  return data;
};
