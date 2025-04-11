import { getHeaders } from "../getHeaders";

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
