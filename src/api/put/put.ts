/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHeaders } from "../getHeaders";

/**
 * @description my generic put function. Protected by specific put functions, to ensure data quality
 * @param {string} url - url for put function
 * @param {object} data - body for put function
 * @returns 
 */
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
