/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHeaders } from "../getHeaders";

export const putData = async (url: string, data: any) => {
    const body = data;
    const req = {
        method: `PUT`,
        body: JSON.stringify(body),
        headers: getHeaders(),
    };
    const response = await fetch(url, req);
    if (!response.ok) {
        const error = await response.json();

        throw new Error(error.errors[0].message);
    }
    const json = await response.json();
    return json;
};

export default { putData };
