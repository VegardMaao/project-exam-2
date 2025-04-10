/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { newVenueButton as S } from "../../styles";
import { useState, useEffect } from "react";
import { NewVenuePopUp } from "../forms/newVenuePopupForm";

export function NewVenueIcon() {
  const [showForm, setShowForm] = useState("none");
  const [showButton, setShowButton] = useState<string | null>();
  const [rotate, setRotate] = useState("0");

  function onClick() {
    setShowForm(showForm === "none" ? "flex" : "none");
    setRotate(rotate === "45" ? "0" : "45");
  }

  const manager = localStorage.getItem("venueManager");
  useEffect(() => {
    setShowButton(manager);
  }, []);

  if (showButton === "true") {
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
