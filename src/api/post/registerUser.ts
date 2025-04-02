import { authUrl } from "../../environment";
import { postData } from "./post";
import { RegisterUserData } from "../../components/interfaces/loginAndRegisterInterface";

export const registerUser = async (userData: RegisterUserData) => {
  const registerUrl = `${authUrl}/register`;
  await postData(registerUrl, userData);
};
