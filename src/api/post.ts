import { getHeaders } from "./getHeaders";

export const postData = async (url: string, data: any) => {
  const body = data;
  const req = {
    method: `POST`,
    body: JSON.stringify(body),
    headers: getHeaders(),
  };
  console.dir(req);
  const response = await fetch(url, req);
  const json = await response.json();
  return json;
};

export default { postData };
