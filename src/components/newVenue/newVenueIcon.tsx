/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { newVenueButton as S } from "../../styles";
import useLoggedInStore from "../../zustandStores/loggedInStore";
import { useState } from "react";
import { NewVenuePopUp } from "../forms/newVenuePopupForm";

export function NewVenueIcon() {
  const { loggedIn } = useLoggedInStore();
  const [showForm, setShowForm] = useState("none");
  const [rotate, setRotate] = useState("0");

  function onClick() {
    setShowForm(showForm === "none" ? "flex" : "none");
    setRotate(rotate === "45" ? "0" : "45");
  }

  if (loggedIn) {
    return (
      <>
        <NewVenuePopUp display={`${showForm}`} />
        <S.NewVenueBtn colors="inverted" rotation={rotate} onClick={onClick}>
          <i className="fa-solid fa-plus"></i>
        </S.NewVenueBtn>
      </>
    );
  }
}
