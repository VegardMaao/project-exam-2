import { authUrl } from "../../environment";
import { postData } from "./post";
import { LoginUserData } from "../../components/interfaces/loginAndRegisterInterface";

/**
 * @description Login function, posting user data to the login url
 * @param {object} userData - the username and password to log in with 
 * @returns 
 */
export const loginUser = async (userData: LoginUserData) => {
  const loginUrl = `${authUrl}/login`;
  const { data } = await postData(loginUrl, userData);
  return data;
};
