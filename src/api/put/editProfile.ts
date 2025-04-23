import { profilesUrl } from "../../environment";
import { EditForm } from "../../components/interfaces/EditFormInterface";
import { putData } from "./put";


/**
 * @description updates an existing user. Passes info on to generic put function
 * @param {object} userData - updated user data
 * @param {string} name - name of user to update
 */
export const editProfile = async (userData: EditForm, name: string) => {
    const editProfileUrl = `${profilesUrl}/${name}`;
    await putData(editProfileUrl, userData);
};
