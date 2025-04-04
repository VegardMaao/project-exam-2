/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHeaders } from "../getHeaders";

export const postData = async (url: string, data: any) => {
  const body = data;
  const req = {
    method: `POST`,
    body: JSON.stringify(body),
    headers: getHeaders(),
  };
  const response = await fetch(url, req);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors[0].message);
  }
  const json = await response.json();
  if (url.includes("auth/login")) {
    localStorage.setItem(`accessToken`, `${json.data.accessToken}`)
    localStorage.setItem(`userName`, `${json.data.name}`);
  }
  return json;
};

export default { postData };
