/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHeaders } from "./getHeaders";

export const postData = async (url: string, data: any) => {
  const body = data;
  const req = {
    method: `POST`,
    body: JSON.stringify(body),
    headers: getHeaders(),
  };
  const response = await fetch(url, req);
  const json = await response.json();
  localStorage.setItem(`accessToken`, `${json.data.accessToken}`)
  return json;
};

export default { postData };
