import { getHeaders } from "../getHeaders";

/**
 * @description deletes an item 
 * @param {string} url - what item to delete. The API only allows for single venues to be deleted, but I have still used the same methodology as other API-functions for this one
 * @returns 
 */
export const deleteData = async (url: string) => {
    const req = {
        method: `DELETE`,
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

export default { deleteData };
