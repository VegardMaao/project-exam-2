import { authUrl } from "../../environment";
import { postData } from "./post";
import { RegisterUserData } from "../../components/interfaces/loginAndRegisterInterface";

/**
 * @description registers a new user 
 * @param {object} userData - the username, email and password for a new user
 */
export const registerUser = async (userData: RegisterUserData) => {
  const registerUrl = `${authUrl}/register`;
  await postData(registerUrl, userData);
};
