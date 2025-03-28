import { apiKey, bearerToken } from "../environment";

export const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${bearerToken}`,
    "X-Noroff-API-Key": apiKey,
  };
};
