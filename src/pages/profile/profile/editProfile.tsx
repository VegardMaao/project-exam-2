import { Metadata } from "../../../components/metadata/metadata";
import { EditProfileForm } from "../../../components/forms/editProfileForm";
import { Link } from "react-router-dom";

export function EditProfile() {
  return (
    <main>
      <Metadata title="Edit your profile" description="Edit your profile" />
      <Link to={"/profile"}>Cancel changes</Link>
      <EditProfileForm />
    </main>
  );
}
