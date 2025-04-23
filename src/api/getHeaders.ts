import { apiKey, bearerToken } from "../environment";

/**
 * @description dynamically sets header info w/correct bearer token and key
 * @returns 
 */
export const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${bearerToken}`,
    "X-Noroff-API-Key": apiKey,
  };
};
