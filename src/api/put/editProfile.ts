import { profilesUrl } from "../../environment";
import { EditForm } from "../../components/interfaces/EditFormInterface";
import { putData } from "./put";

export const editProfile = async (userData: EditForm, name: string) => {
    const editProfileUrl = `${profilesUrl}/${name}`;
    await putData(editProfileUrl, userData);
};
